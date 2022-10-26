const index = require("./index/index.js");
const register = require("./users/register.js");
const login= require("./users/login.js");

const Routes = {
    indexRoute:(req,res)=>{
        index.action(req,res);
    },

    registerRoute:(req,res)=>{
        register.route(req,res);
    },
    registerPostRoute:(req,res,saltRounds)=>{
        register.action(req,res,saltRounds);
    },

    loginRoute:(req,res)=>{
        login.action(req,res);
    },

}

module.exports = Routes;