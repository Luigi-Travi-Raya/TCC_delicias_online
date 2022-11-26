const index = require("./index/index.js");
const register = require("./users/register.js");
const login = require("./users/login.js");
const preferences = require("./users/preferences.js");
const addRecipe = require("./recipes/addRecipe.js");

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
    preferencesPostRoute:(req,res,edit_pswrd)=>{
        if(edit_pswrd)
            preferences.editPassword(req,res)
        else
            preferences.editData(req,res);
    },

    addRecipeRoute:(req,res)=>{
        addRecipe.route(req,res);
    }
}

module.exports = Routes;