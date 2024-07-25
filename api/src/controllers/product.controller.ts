import { Request, Response } from 'express';
import Product from '../models/Product';
import { Op } from 'sequelize';

/**
 * Find all the products
 * @param req 
 * @param res 
 * @returns 
 */
export const findAll = async (req: Request, res: Response) => {
    const { query }: any = req;
    const sort = query.sort;
    let sortingField = 'name', sortingOrder = 'ASC';
    if (sort) {
        if (query?.sort?.includes('-')) {
            sortingField = sort.replace(/-/g, "");
            sortingOrder = 'DESC';
        } else {
            sortingField = sort;
            sortingOrder = 'ASC';
        }
    }
    try {
        const products = await Product.findAll({
            order: [[sortingField, sortingOrder]],
            where: {
                [Op.and]: [
                    {
                        name: { [Op.like]: `%${query.filter.name}%` },
                        brand: { [Op.like]: `%${query.filter.brand}%` },
                    }
                ]
            }
        });
        return res.send(products);
    } catch (error) {
        return res.send(error);
    }
};

/**
 * Find a product
 * @param param0 
 * @param res 
 * @returns 
 */
export const find = async ({ params }: Request, res: Response) => {
    const { id } = params;
    try {
        const product = await Product.findOne({ where: { id } });
        return res.send(product);
    } catch (error) {
        return res.send(error);
    }
};

export const create = async ({ body }: Request, res: Response) => {
    try {
        const product = await Product.create(body);
        return res.send(product);
    } catch (error) {
        return res.send(error);
    }
};

/**
 * Update a product
 * @param param0 
 * @param res 
 * @returns 
 */
export const update = async ({ body, params }: Request, res: Response) => {
    const { id } = params;
    try {
        await Product.update(body, { where: { id } });
        const product = await Product.findOne({ where: { id } });
        return res.send(product);
    } catch (error) {
        return res.send(error);
    }
};