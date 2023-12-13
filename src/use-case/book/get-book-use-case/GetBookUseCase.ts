import { GetBookParams } from "../../../repositories/book/dtos/GetBookParams";
import { BookRepository } from "../../../repositories/book/BookRepository";

export class GetBookUseCase {
  async execute(params: GetBookParams) {
    const bookRepository = new BookRepository();
    const book = await bookRepository.getBook(params);
    return book;
  }
}
