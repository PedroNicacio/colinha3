import Usuario from "../models/usuario.js"
import { bdUsuarios } from "../infra/bd.js"

class usuarioController {
  
  static rotas(app){
    // Rota para o recurso usuario
    app.get('/usuario', usuarioController.listar)
    app.post('/usuario', usuarioController.inserir)
    app.post("/usuario/:email", usuarioController.filtrarPorEmail)
    app.delete("/usuario/:email", usuarioController.apagarUsuario)
    app.put("/usuario/:email", usuarioController.atualizarUsuario)
  }

    static listar(req,res){
      const usuarios = bdUsuarios
      //Devolve a lista de usuarios
      res.send(usuarios)
    }

    static inserir(req,res){
      res.send('Rota ativada com Post e recurso usuario: Usuario de ve ser inserido')
      console.log(req.body)
    }
  
    static filtrarPorEmail(req, res){
      const usuario = bdUsuarios.filter((usuario) => usuario.email === req.params.email)
      res.send(usuario)
      console.log(usuario)
      }
    
      
    static apagarUsuario (req,res){
      let index;
      const [usuario] = bdUsuarios.filter((usuario, i) => {
        if(usuario.email === req.params.email){
          index = i;  
        }
        return usuario.email === req.params.email
      }) 
      bdUsuarios.splice(index, 1)
      console.log(usuario)
      res.send(`Usuario: ${usuario.email}, index: ${index}`)
      res.send('Apagou')
    }

    
    static atualizarUsuario (req,res){
    let index;
    const [usuario] = bdUsuarios.filter((usuario, i) => {
      if(usuario.email === req.params.email){
        index = i;  
      }
      return usuario.email === req.params.email
    }) 
    
    bdUsuarios.splice[index].nome = req.body.nome
    bdUsuarios.splice[index].email = req.body.email
    bdUsuarios.splice[index].senha= req.body.senha
    res.send('Alterado com sucesso')
  }

}

export default usuarioController
