const conn = require('./connection');
const Sequelize = require('sequelize');


const Model = conn.define('model', {
    idModel: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    age: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    birthday: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    growth: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    bust: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    waist: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    footSize: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    weight: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    appearance: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    eyeColor: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hairColor: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    hairType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    notes: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
}, {
    tableName: 'Model',
});


module.exports = Model