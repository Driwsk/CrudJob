const { DataTypes } = require('sequelize');
const banco = require('../infraestrutura/bancoDeDados');

module.exports = banco.define('Pessoa', {
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    
    cpf: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    dataNac: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM,
        values: ['COMPLETED','ACTIVE'],
        allowNull:false,
        defaultValue: 'ACTIVE'
    }
});
