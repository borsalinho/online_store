const sequelize = require ('../db')
const {DataTypes} = require ('sequelize')


const Product = sequelize.define('product',{
    id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type: DataTypes.STRING, unique:true},
    price:{type: DataTypes.INTEGER },
    size:{type: DataTypes.INTEGER },
})

module.exports = {
    Product
}