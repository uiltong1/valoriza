import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../respositories/ComplimentRepositories";

export class ListsUserSendComplimentsService {
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_sender: user_id
            },
            relations: ["userReceiver", "userSender", "tag"]
        });

        return compliments;
    }
}