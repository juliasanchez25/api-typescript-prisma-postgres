import { GetAuthorsParams } from "../../../repositories/author/dtos/GetAuthorsParams";
import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class GetAuthorsUseCase {
  async execute({ name, email }: GetAuthorsParams) {
    const authorRepository = new AuthorRepository();
    const authors = await authorRepository.getAuthors({ name, email });
    return authors;
  }
}
