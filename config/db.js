const Sequelize = require('sequelize');
const {config} = require('dotenv')
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
            ca: fs.readFileSync("your_path_to_ca_cert_file_BaltimoreCyberTrustRoot.crt.pem")   
        }
        
    } 
);

module.exports = sequelize;