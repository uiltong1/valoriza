import { Request, Response } from "express";
import { ListsTagService } from "../services/ListsTagService";

export class ListsTagController{
    async handle(request: Request, response: Response){
        const listTagService = new ListsTagService();

        const tags = await listTagService.execute();

        return response.json(tags);
    }
}