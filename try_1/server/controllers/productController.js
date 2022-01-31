const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
class ProductController {
    async create (req, res){
        try {
            const{ name, price,size} = req.body
            const{img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..', 'static', fileName))

            const device = await Device.create({name, price, size , img:fileName})

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getOne (req,res){
        res.json('asasdasdasd')
    }
    async check(req, res, next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('НЕ задан ID'))
        }
        res.json(id);
    }
    async getAll(req, res)
} 

module.exports = new ProductController()