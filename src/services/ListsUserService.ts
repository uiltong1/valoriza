import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../respositories/UsersRepositories";

export class ListsUserService {
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const users = await usersRepositories.find();

        return classToPlain(users);
    }
}