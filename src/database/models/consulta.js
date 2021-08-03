const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require('../index')

const Consultar = sequelize.define('Consultar', { 

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    acao: {
        type: Sequelize.STRING,
        allowNull: false,
    }
},
{
    freezeTableName: true,
    modelName:'Consulta'
    
});


module.exports = Consultar;
