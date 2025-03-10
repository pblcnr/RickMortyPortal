const { Sequelize } = require('sequelize');

// Conexão com o MySQL
const sequelize = new Sequelize('rick_and_morty_app', 'root', 'rootraiz', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;