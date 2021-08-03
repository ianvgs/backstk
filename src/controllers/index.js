const { Sequelize, Model, DataTypes } = require("sequelize");
const Consultar = require("../database/models/consulta");
const api = require('axios')
const dotenv = require('dotenv');
dotenv.config();
const apitk = process.env.API_TOKEN;

class Crud {   
    /////////////////////////////////////////////////////////////////////////////////////////       
    async consultar (req,res){
        const acao = req.body.acao
        const resu = await Consultar.findAll({
            raw:true,
            limit: 1,
            order: [ [ 'createdAt', 'DESC' ]]
        })     
        if (resu[0].acao === acao){
           return res.status(200).json({message: "Você acabou de fazer essa consulta, informe outra ação."})
        }
        if (resu[0].acao !== acao){   
            const reg = await Consultar.create({acao:acao, id:''})
            console.log(reg) 
            try{
            const price = await api.get(`https://cloud.iexapis.com/v1/stock/${acao}/quote/latestPrice?token=${apitk}`)
            const info = await api.get(`https://cloud.iexapis.com/v1/stock/${acao}/company?token=${apitk}`)  
            const priceC = price.data;
            const infoC=info.data
            const value = {priceC,infoC}
            console.log(value) 
            return res.json(value)
            } catch (error) {
                return res.json({error,message:"Código da ação invalida"});
            }     
        }   
    } 
}



module.exports = new Crud;