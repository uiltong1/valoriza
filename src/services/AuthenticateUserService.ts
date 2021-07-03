import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../respositories/UsersRepositories"

interface IAuthenticate {
    email: string,
    password: string
}

export class AuthenticateUserService {
    async execute({email, password}:IAuthenticate){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            throw new Error("Email/Password incorrect.");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect.");
        }

        const token = sign({
            email: user.email
        }, "b7c089e7fe361a16bc39ea4d1f426b5b", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}