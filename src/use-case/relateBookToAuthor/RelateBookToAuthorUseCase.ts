import { RelateBookToAuthorParams } from "../../repositories/relateBookToAuthor/dtos/RelateBookToAuthorParams";
import { RelateBookToAuthorRepository } from "../../repositories/relateBookToAuthor/RelateBookToAuthorRepository";

export class RelateBookToAuthorUseCase {
  async execute(params: RelateBookToAuthorParams) {
    const relateBookToAuthorRepository = new RelateBookToAuthorRepository();
    const relateBookToAuthor =
      await relateBookToAuthorRepository.relateBookToAuthor(params);
    return relateBookToAuthor;
  }
}
