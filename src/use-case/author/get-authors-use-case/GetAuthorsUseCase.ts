import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class GetAuthorsUseCase {
  async execute() {
    const authorRepository = new AuthorRepository();
    const authors = await authorRepository.getAuthors();
    return authors;
  }
}
