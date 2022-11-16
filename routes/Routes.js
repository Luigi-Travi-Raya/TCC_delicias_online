const index = require("./index/index.js");
const register = require("./users/register.js");
const login = require("./users/login.js");
const preferences = require("./users/preferences.js");

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
        login.route(req,res);
    },
    loginPostRoute:(req,res)=>{
        login.action(req,res);
    },
    logoutAction:(req,res)=>{
        login.logout(req,res);
    },

    preferencesRoute:(req,res,edit_pswrd)=>{
        preferences.route(req,res,edit_pswrd);
    },
    preferencesPostRoute:(req,res)=>{
        preferences.action(req,res);
    }
}

module.exports = Routes;