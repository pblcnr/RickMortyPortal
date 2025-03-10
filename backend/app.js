const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const sequelize = require('./database.js');
const User = require('./models/Users.js');

const app = express();

// Configuração do servidor
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000']
}));
app.use(express.json());

// Rota de registro
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validação básica
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
        }

        // Verificação de usuário existente
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        // Hash da senha antes de salvar no banco
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Criação de novo usuário com senha segura
        const user = await User.create({ name, email, password: hashedPassword });

        // Retorno dos dados do usuário (sem a senha)
        res.status(201).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Erro ao registrar: ', error);
        res.status(400).json({ error: 'Erro ao registrar usuário' });
    }
});

// Rota de login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validação básica
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        // Busca do usuário pelo email
        const user = await User.findOne({ where: { email } });

        // Verificação de cadastro
        if (!user) {
            return res.status(401).json({ error: 'Email ou senha incorretos' });
        }

        // Verificar senha com bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Email ou senha incorretos' });
        }

        // Retorno dos dados do usuário (sem a senha)
        res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Erro ao fazer login: ', error);
        res.status(400).json({ error: 'Erro ao fazer login' });
    }
});

// Rota de alteração de senha
app.post('/api/change-password', async (req, res) => {
    try {
        const { email, currentPassword, newPassword } = req.body;

        // Validação básica
        if (!email || !currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ error: 'A nova senha deve ter pelo menos 6 caracteres' });
        }

        // Busca do usuário pelo email
        const user = await User.findOne({ where: { email } });

        // Verificação de existência do usuário
        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        // Verificar senha atual com bcrypt
        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Senha atual incorreta' });
        }

        // Hash da nova senha
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        // Atualização de senha
        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Senha alterada com sucesso' });
    } catch (error) {
        console.error('Erro ao alterar a senha: ', error);
        res.status(400).json({ error: 'Erro ao alterar senha' });
    }
});

// Rota de autenticação
app.get('/api/user/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email']
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json({ user });
    } catch (error) {
        console.error('Erro ao buscar usuário: ', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// Sincronização do modelo com o BD e inicialização do servidor
const PORT = process.env.PORT || 5001;

sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado e sincronizado');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados: ', err);
    });