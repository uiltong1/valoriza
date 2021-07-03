import { Request, Response } from "express";
import { ListsUserService } from "../services/ListsUserService";

export class ListsUsersController{
    async handle( request: Request, response: Response){
        const listUsersService = new ListsUserService()

        const users = await listUsersService.execute();

        return response.json(users)
    }
}