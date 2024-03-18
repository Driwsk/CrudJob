const { DataTypes } = require('sequelize');
const banco = require('../infraestrutura/bancoDeDados');

module.exports = banco.define('meu', {
    title: {
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
