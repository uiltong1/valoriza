import { Request, Response } from "express";
import { ListsUserReceiverComplimentsService } from "../services/ListsUserReceiverComplimentsService";

export class ListsUserReceiverComplimentsController{
    async handle(request: Request, response: Response){
        const { user_id } = request;

        const listsUserReceiverComplimentsService = new ListsUserReceiverComplimentsService();

        const compliments = await listsUserReceiverComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}