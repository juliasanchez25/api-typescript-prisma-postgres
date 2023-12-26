import { UpdateAuthorParams } from "../../../repositories/author/dtos/UpdateAuthorParams";
import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class UpdateAuthorUseCase {
  async execute(params: UpdateAuthorParams) {
    const authorRepository = new AuthorRepository();
    const author = await authorRepository.updateAuthor(params);
    return author;
  }
}
