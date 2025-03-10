# Rick and Morty Portal 🛸

Bem-vindo ao Rick and Morty Portal! Esta aplicação web permite explorar informações sobre os personagens da série Rick and Morty através de uma interface responsiva e intuitiva.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste prático de desenvolvimento de software. A aplicação consiste em dois módulos principais:

- **Frontend**: Desenvolvido com Next.js, TypeScript e TailwindCSS
- **Backend**: API RESTful construída com Node.js e Express
- **Banco de Dados**: MySQL para armazenar dados de usuários

A aplicação consome a API pública do Rick and Morty ([Rick and Morty API](https://rickandmortyapi.com/)) para exibir informações detalhadas sobre os personagens da série.

## ✨ Funcionalidades

- 🔐 Sistema de autenticação simples com email e senha
- 🧠 Visualização de personagens da série Rick and Morty
- 🔍 Navegação paginada entre os resultados da API
- 📱 Design responsivo para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- [Next.js](https://nextjs.org/) - Framework React com SSR
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Axios](https://axios-http.com/) - Cliente HTTP para requisições à API

### Backend
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para hash de senhas

### Banco de Dados
- [MySQL](https://www.mysql.com/) - Sistema de gerenciamento de banco de dados relacional

## 🚀 Instalação e Uso

### Pré-requisitos
- Node.js (v14 ou superior)
- MySQL (v8 ou superior)
- npm ou yarn

### Configuração do Backend

1. Clone o repositório:
```bash
git clone https://github.com/pblcnr/RickMortyPortal
cd RickMortyPortal/backend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor:
```bash
npm run dev
# ou
yarn dev
```

O servidor backend estará rodando em `http://localhost:5001`.

### Configuração do Frontend

1. Navegue até a pasta do frontend:
```bash
cd ../frontend
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O aplicativo frontend estará rodando em `http://localhost:3000`.

## 📝 Estrutura do Projeto

```
RickMortyPortal/
├── backend/
│   ├── models/           # Modelos do banco de dados
│   └── index.ts          # Ponto de entrada
│   └── package.json
├── frontend/
│   ├── public/           # Arquivos estáticos
│   ├── src/
│   │   ├── app/
│   │   ├── (screens)/    # Páginas do Next.js
│   │   └── global.css/   # Estilos globais
│   └── package.json
└── README.md
```

## 🔗 Demo Online

Você pode acessar a versão online da aplicação através do seguinte link:
[Rick and Morty Portal Demo]()

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.