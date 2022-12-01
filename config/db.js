const Sequelize = require('sequelize');
const {config} = require('dotenv')
const fs = require('fs')
config();

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.PASSWORD,
    {dialect: 
        process.env.DBDIALECT,
        host: process.env.DBHOST,
        encrypt:true
    }, 
    {dialectOption:
        {ssl:
            fs.readFileSync("./public/license/BaltimoreCyberTrustRoot.crt")   
        }
        
    } 
);

module.exports = sequelize;