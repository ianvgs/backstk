const Crud = require('../controllers/index.js')

module.exports = app => {  
 
  //////////////Lista registro através de id no param

  app.post('/fac',async (req, res)=>{ 
    console.log(req.body)    
    Crud.consultar(req,res)
  }) 
  app.get('/', (req, res)=>{    
    res.send("Você acessou o projeto facile-backend, consulte o manual no README para verificar os métodos disponíveis.").status(200)
  })

  app.get('/html', (req, res)=>{    
    res.sendFile('index.html',{root: __dirname})
  })
  app.get('/geta', (req, res)=>{    
    res.send("vamos ver").status(200)
  })

}






