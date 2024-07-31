const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Country = sequelize.define('country', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    lenguaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagurl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
   
});

module.exports = Country;