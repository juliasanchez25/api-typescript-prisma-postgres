import { DeleteBookParams } from "../../../repositories/book/dtos/DeleteBookParams";
import { BookRepository } from "../../../repositories/book/BookRepository";

export class DeleteBookUseCase {
  constructor(private bookRepository: BookRepository) {}

  async execute(params: DeleteBookParams) {
    await this.bookRepository.deleteBook({ id: params.id });
  }
}
