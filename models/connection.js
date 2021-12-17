const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('modelAgency', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
      timestamps: false
    },
});

sequelize.sync();

module.exports = sequelize;