import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController{
    async index(request: Request, response: Response){

        const items = await knex('items').select('*');
    
        const serialazedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost/uploads/${item.image}`
            }
        });
    
        return response.json(serialazedItems);
    }
}

export default ItemsController;