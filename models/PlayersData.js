const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL)

const Players = sequelize.define('Players', {
    name: DataTypes.STRING,
    tag: DataTypes.STRING,
    timeSeriesRR: DataTypes.INTEGER
});