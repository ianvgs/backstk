const Crud = require('../controllers/index.js')

module.exports = app => {  
 
  //////////////Lista registro através de id no param

  app.post('/fac',async (req, res)=>{ 
    console.log(req.body)    
    Crud.consultar(req,res)
  }) 
  app.get('/', (req, res)=>{    
    res.send("Você acessou o backend do projeto Guedestocks, consulte o manual no README para verificar os métodos disponíveis.").status(200)
  }) 

  app.post('/admin',async (req, res)=>{ 
    console.log(req.body)    
    Crud.admin(req,res)
  }) 

}






