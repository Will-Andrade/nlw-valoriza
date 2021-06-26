import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService";

class ListUserSentComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSentComplimentsService = 
            getCustomRepository(ListUserSentComplimentsService);

        const compliments = await listUserSentComplimentsService
            .execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSentComplimentsController };
