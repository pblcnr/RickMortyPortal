const { DataTypes } = require('sequelize');
const sequelize = require ('../database.js');

// Modelo do Usuário
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Nome da Tabela
    tableName: 'usuarios'
})

module.exports = User;