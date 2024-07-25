import { Router } from 'express';
import * as productController from '../controllers/product.controller';
import { createProductValidator, updateProductValidator, validate } from '../validators/validator';

const router = Router()

router
    .route('/products')
    .get(productController.findAll)
    .post(createProductValidator(), validate, productController.create);

router.route('/products/:id')
    .get(productController.find)
    .put(updateProductValidator(), validate, productController.update);

export default router;