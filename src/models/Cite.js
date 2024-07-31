const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Cite = sequelize.define('cite', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

})
   module.exports=Cite;






