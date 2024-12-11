const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db.js");

const Models = {
    Housing: require('./housing.model.js')(sequelize, DataTypes),

};

module.exports = {
    Models
};
