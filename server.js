const Routes = require ('./routes/Routes.js');

const express = require('express');
const app = express();
const req = require('express/lib/request');
const res = require('express/lib/response');
const session = require('express-session')

const formidable = require('formidable');
const pug = require('pug');
const tb_categorias = require('./model/tb_categorias');
const tb_usuarios = require('./model/tb_usuarios');
const tb_receitas = require('./model/tb_receitas');
const tb_denuncias = require('./model/tb_denuncias');
const tb_likes = require('./model/tb_likes');
const tb_comentarios = require('./model/tb_comentarios');

const port = 80;

// Define 'public' como pasta para recursos
app.use(express.static('public'))

// Define a template engine padrão para o Pug
app.set('view engine','pug');

//--------------------------ROTAS--------------------------
app.get('/',(req,res)=>{
    Routes.indexRoute(req,res);
})

app.get('/registro',(req,res)=>{
    Routes.registerRoute(req,res);
})
app.post('/registrar',(req,res)=>{
    Routes.registerPostRoute(req,res);
})

app.get('/login',(req,res)=>{
    Routes.loginRoute(req,res);
})
app.post('/logar',(req,res)=>{
    
})

let server = app.listen(port, () =>{
    console.log("Servidor rodando em http://localhost/");
});

// (async () =>{
//     const database = require('./config/db');
//     const tb_categorias = require('./model/tb_categorias');
//     const tb_usuarios = require('./model/tb_usuarios');
//     const tb_receitas = require('./model/tb_receitas');
//     const tb_denuncias = require('./model/tb_denuncias');
//     const tb_likes = require('./model/tb_likes');
//     const tb_comentarios = require('./model/tb_comentarios');

//     try {
//         await database.sync();
//         console.log("SUCESSO!!");

//    } catch (error) {
//         console.log(error);
//    }
// })();
