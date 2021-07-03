import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../respositories/TagRepositories";
import { classToPlain } from "class-transformer"

export class ListsTagService {
    async execute(){
        const tagRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagRepositories.find();

        return classToPlain(tags);
    }
}