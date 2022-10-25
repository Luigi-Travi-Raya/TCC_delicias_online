const Tables = {
    start: ()=>{
        (async () =>{
            const database = require('./config/db');
            const tb_categorias = require('./model/tb_categorias');
            const tb_usuarios = require('./model/tb_usuarios');
            const tb_receitas = require('./model/tb_receitas');
            const tb_denuncias = require('./model/tb_denuncias');
            const tb_likes = require('./model/tb_likes');
            const tb_comentarios = require('./model/tb_comentarios');
        
            try {
                await database.sync();
                console.log("SUCESSO!!");
        
           } catch (error) {
                console.log(error);
           }
        })();
    }
}

module.exports = Tables;