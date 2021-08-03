const express = require('./src/express/index')
const app = express();
const dotenv = require('dotenv')
const sequelize = require('./src/database/index')
dotenv.config();
app.set('view engine','pug')
//app.use(express.static())
try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connection has been established successfully.');
    myFunction();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
async function myFunction(){
    const app = express();
    app.listen(process.env.PORT ||3333, console.log({message:'Servidor:On.'}));
    console.log('Servidor rodando na porta 3333')    

}



