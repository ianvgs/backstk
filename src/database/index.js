const Sequelize =  require('sequelize');
const dotenv = require('dotenv')
dotenv.config();


const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,    
    define:{
        timeStamps:true
    }
}); 


module.exports = sequelize;