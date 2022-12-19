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
const {config} = require('dotenv')

config();

const saltRounds = 10;
const port = process.env.PORT;

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
    Routes.preferencesRoute(req,res,false);
})
app.get('/change_password',(req,res)=>{
    Routes.preferencesRoute(req,res,true);
})

app.post('/user/edit', (req,res)=>{
    Routes.preferencesPostRoute(req,res,false)
})
app.post('/user/edit_password', (req,res)=>{
    Routes.preferencesPostRoute(req,res,true)
})

app.get('/recipe_add', (req,res)=>{
    Routes.addRecipeRoute(req,res);
})
app.post('/recipe/add', (req,res)=>{
    Routes.addRecipePostRoute(req,res);
})

app.post('/like',(req, res)=>{
    Routes.likeRecipePost(req, res)
})
app.post('/dislike',(req,res)=>{
    Routes.dislikeRecipePost(req,res)
})

app.get('/saved', (req,res)=>{
    Routes.savedRoute(req,res)
})

app.get('/profile-:id', (req,res)=>{
    Routes.profileRoute(req,res);
})

app.get('/recipe-:id', (req,res)=>{
    Routes.recipeRoute(req,res);
})

let server = app.listen(port, () =>{
    console.log("Servidor rodando em http://localhost/");
});

// Sincroniza sequelize com a DB
Tables.start();
