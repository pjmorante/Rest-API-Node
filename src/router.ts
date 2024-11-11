import { Router } from "express";
import { createProduct, getProductById, getProducts } from "./handlers/product";
import { body, param } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

//Routing

router.get('/', getProducts);

router.get(
  '/:id',
  param('id').isInt().withMessage('Id no válido'),
  handleInputErrors,
  getProductById
);

router.post('/', 
  
  body('name')
      .notEmpty().withMessage('Este campo no puede ir vacio'),
  body('price')
      .notEmpty().withMessage('Este campo no puede ir vacio')
      .isNumeric().withMessage('Precio no válido')
      .custom(value => value > 0).withMessage('Precio no válido'),  
  handleInputErrors,
  createProduct
);

export default router;