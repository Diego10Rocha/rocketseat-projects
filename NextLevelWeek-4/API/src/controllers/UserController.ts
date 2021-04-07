import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/user';

class UserController {

    //cirando usuario
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersrepository = getRepository(User);

        const userAlreadyExists = await usersrepository.findOne({
            email
        });

        if (userAlreadyExists) {
            return response.status(400).json({
                "error": "User already exists!"
            })
        }

        const user = usersrepository.create({
            name, email
        });

        await usersrepository.save(user);

        return response.json(user);
    };
}

export { UserController }