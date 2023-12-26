import { DeleteAuthorParams } from "../../../repositories/author/dtos/DeleteAuthorParams";
import { AuthorRepository } from "../../../repositories/author/AuthorRepository";

export class DeleteAuthorUseCase {
  constructor(private authorRepository: AuthorRepository) {}

  async execute(params: DeleteAuthorParams) {
    await this.authorRepository.deleteAuthor({ id: params.id });
  }
}
