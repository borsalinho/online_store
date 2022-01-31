const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/',)
router.get('/', productController.check)
// router.get('/:id', productController.getOne)
router.delete('/',)

module.exports = router