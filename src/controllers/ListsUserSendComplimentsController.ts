import { Request, Response } from "express";
import { ListsUserSendComplimentsService } from "../services/ListsUserSendComplimentsService";

export class ListsUserSendComplimentsController{
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listsUserSendComplimentsService = new ListsUserSendComplimentsService();

        const compliments = await listsUserSendComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}