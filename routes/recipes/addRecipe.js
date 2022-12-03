const bcrypt = require('bcrypt');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const tb_receitas = require('../../model/tb_receitas');
const tb_categorias = require('../../model/tb_categorias');


const addRecipe = {
    route:(req,res)=>{
        if(req.session.isLogged){
            tb_categorias.findAll().then(queryResult=>{
                console.log("Acessando add recipe");
                res.render("addRecipe", {
                    userName:req.session.username, 
                    isLogged:req.session.isLogged, 
                    erro: req.session.errEdit,
                    categorias: queryResult
                })
            })
        }else{
            res.redirect('/');
        }

    },
    post:(req,res)=>{

        if(!req.session.isLogged){
            res.redirect('/')
        }

        let form = new formidable.IncomingForm();
        form.parse(req, (err1,fields,files)=>{
            
            console.log(err1);
            console.log(fields)
            
            if(fields.recipeName == "" || fields.type == "" || fields.portions == "" || fields.time == "" || fields.recipeDifficulty == "" || fields.ingredients == "" || fields.desc == "" || fields.steps == "" ){
                req.session.errAdd = "missing_fields";
                return res.redirect("../recipe_add");
            }

            if(fields.recipeDifficulty < 1 && fields.recipeDifficulty > 5){
                req.session.errAdd = "invalid_difficulty";
                return res.redirect("../recipe_add");
            }

            
            tb_receitas.findAll({
                where:{nome_receita: fields.recipeName}
            }).then(queryResult=>{
                if(queryResult != ""){
                    console.log(`recipe name taken ${queryResult}`)
                    req.session.errAdd = "recipeName_taken";
                    return res.redirect("../recipe_add");
                }

                let imgPath = files.img.filepath;
                let hash = crypto.createHash('md5').update(Date.now().toString()).digest('hex');
                let imgName = hash + '.' + files.img.mimetype.split('/')[1];

                let newImgPath = path.join(__dirname, '../../public/img' , imgName);
                fs.rename(imgPath, newImgPath, (err) => { if (err) throw err})

                tb_receitas.create({
                    id_categoria:fields.type,
                    id_autor_usuario:req.session.userId,
                    nome_receita:fields.recipeName,
                    nome_fotos_receita: imgName,
                    qtd_porcoes_receita:fields.portions,
                    tempo_preparo_receita:fields.time,
                    dificuldade_receita:fields.recipeDifficulty,
                    ingredientes_receita:fields.ingredients,
                    preparo_receita:fields.steps,
                    descricao_receita: fields.desc
                })
                return res.redirect('/')
                
            })
            
        })

    }
}

module.exports = addRecipe;
// {
//     recipe_name: 'aa',  
//     type: 'a',
//     portions: '12',     
//     time: 'a',
//     recipe_diff: '5',   
//     ingredients: 'a',   
//     desc: ' a',
//     steps: ' a',        
//     submit_btn: 'Enviar'
//   }