import { UpdateBookParams } from "../../../repositories/book/dtos/UpdateBookParams";
import { BookRepository } from "../../../repositories/book/BookRepository";

export class UpdateBookUseCase {
  async execute(params: UpdateBookParams) {
    const bookRepository = new BookRepository();
    const book = await bookRepository.updateBook(params);
    return book;
  }
}
