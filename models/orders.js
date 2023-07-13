const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Orders = sequelize.define('order',{

    id:{
        type: Sequelize.INTEGER,
        unique:true,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },
    dish:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    table:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Orders;