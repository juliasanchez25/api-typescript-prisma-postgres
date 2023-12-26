import { CreateAuthorParams } from "../../../repositories/author/dtos/CreateAuthorParams";
import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class CreateAuthorUseCase {
  async execute(params: CreateAuthorParams) {
    const authorRepository = new AuthorRepository();
    const author = await authorRepository.createAuthor(params);
    return author;
  }
}
