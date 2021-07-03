import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../respositories/ComplimentRepositories";
import { UsersRepositories } from "../respositories/UsersRepositories";


interface IComplimentRequest{
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

export class CreateComplimentService {
    async execute({
        tag_id,
        user_sender,
        user_receiver,
        message
    }: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentRepositories);

        const usersRepositories = getCustomRepository(UsersRepositories);

        if(user_sender == user_receiver){
            throw new Error("Incorrect User Receiver");
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);

        if(!userReceiverExists){
            throw new Error("User Receiver does not exusts!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}