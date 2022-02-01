const sequalize = require('../db')
const {DataTypes} = require('sequelize')

const Product = sequalize.define('product', {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    price: {type:DataTypes.INTEGER},
    size: {type:DataTypes.INTEGER},
})


module.exports = {
    Product
}