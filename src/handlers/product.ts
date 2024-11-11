import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt', 'availability'] },
    });
    res.json({data: products});
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt', 'availability'] },
    });
    if (!product) {
      res.status(404).json({
        error: 'Producto no encontrado',
      })
      return;
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  // const product = new Product(req.body);
  // const savedProduct = await product.save();
  
  const product = await Product.create(req.body);
  res.json({ data: product });
};