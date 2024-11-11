import { Router } from "express";
import { createProduct, getProducts } from "./handlers/product";
import { body } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router();

//Routing

router.get('/', getProducts);

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