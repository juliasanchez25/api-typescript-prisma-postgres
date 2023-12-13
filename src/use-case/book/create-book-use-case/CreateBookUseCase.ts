import { CreateBookParams } from "../../../repositories/book/dtos/CreateBookParams";
import { BookRepository } from "../../../repositories/book/BookRepository";

export class CreateBookUseCase {
  async execute(params: CreateBookParams) {
    const bookRepository = new BookRepository();
    const book = await bookRepository.createBook(params);
    return book;
  }
}
