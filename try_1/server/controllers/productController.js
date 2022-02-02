const {Product} = require('../models/models')
const uuid = require('uuid')
const path = require('path')



class ProductController {

    async create(req,res){
        try{
            const {name,price,size} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name,price,size,img:fileName})
            return res.json(product)
        } catch (e){
            console.log('ERROR!')
        }
    }

    async getAll(req,res){
        let products
        products = await Product.findAll()
        return res.json(products)
    }

}
    

module.exports = new ProductController()
