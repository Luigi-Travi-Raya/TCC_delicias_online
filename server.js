const Routes = require ('./routes/Routes.js');
const Tables = require ('./tables.js')

const express = require('express');
const app = express();
const req = require('express/lib/request');
const res = require('express/lib/response');
const session = require('express-session')

const formidable = require('formidable');
const pug = require('pug');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const port = 80;

// Define 'public' como pasta para recursos
app.use(express.static('public'))

// Define a template engine padrão para o Pug
app.set('view engine','pug');

// Inicia a session com uma chave aleatória
app.use(session({
    secret: 'dXAYmY4dZ5',
    resave: false,
    saveUninitialized: true
}));

//--------------------------ROTAS--------------------------
app.get('/',(req,res)=>{
    Routes.indexRoute(req,res);
})

app.get('/registro',(req,res)=>{
    Routes.registerRoute(req,res);
})
app.post('/user/registrar',(req,res)=>{
    Routes.registerPostRoute(req,res,saltRounds);
})

app.get('/login',(req,res)=>{
    Routes.loginRoute(req,res);
})
app.post('/user/logar',(req,res)=>{
    Routes.loginPostRoute(req,res);
})
app.get('/user/logout',(req,res)=>{
    Routes.logoutAction(req,res);
})

app.get('/preferences',(req,res)=>{
    Routes.editRoute(req,res);
})


let server = app.listen(port, () =>{
    console.log("Servidor rodando em http://localhost/");
});

// Sincroniza sequelize com a DB
Tables.start();
