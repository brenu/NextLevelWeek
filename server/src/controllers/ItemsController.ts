import { Request, Response } from 'express';
import knex from '../database/connection';


//Métodos padrão - Index, Show, Create, Update, Delete
class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
<<<<<<< HEAD
                image_url: `http://192.168.0.108:3333/uploads/${item.image}`
=======
                image_url: `http://localhost:3333/uploads/${item.image}`
>>>>>>> bc93bfa5959f3bf7c0cce851db0c34279861e811
            };
        });
        
        return res.json(serializedItems);
    }
}

export default ItemsController;