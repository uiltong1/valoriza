import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../respositories/ComplimentRepositories";

export class ListsUserReceiverComplimentsService {
    async execute(user_id: string){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver: user_id,
            },
            relations: ["userReceiver", "userSender", "tag"]
        });

        return compliments;
    }
}