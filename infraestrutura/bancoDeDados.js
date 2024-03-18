const {Sequelize, Model} = require('sequelize');

const banco = new Sequelize({
    dialect: 'sqlite',
    storage: './banco.sqlite',
});

module.exports = banco;