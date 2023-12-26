import { GetAuthorParams } from "../../../repositories/author/dtos/GetAuthorParams";
import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class GetAuthorUseCase {
  async execute(params: GetAuthorParams) {
    const authorRepository = new AuthorRepository();
    const author = await authorRepository.getAuthor(params);
    return author;
  }
}
