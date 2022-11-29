import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','roweyd2000',{
    host: 'localhost',
    dialect: 'mysql',

});

export default db;