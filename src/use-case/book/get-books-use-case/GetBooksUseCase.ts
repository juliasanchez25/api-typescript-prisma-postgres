import { BookRepository } from "../../../repositories/book/BookRepository";

export class GetBooksUseCase {
  async execute() {
    const bookRepository = new BookRepository();
    const books = await bookRepository.getBooks();
    return books;
  }
}
