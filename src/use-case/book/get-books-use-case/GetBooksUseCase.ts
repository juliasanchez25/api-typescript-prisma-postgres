import { GetBooksParams } from "../../../repositories/book/dtos/GetBooksParams";
import { BookRepository } from "../../../repositories/book/BookRepository";

export class GetBooksUseCase {
  async execute({ title, description, genre }: GetBooksParams) {
    const bookRepository = new BookRepository();
    const books = await bookRepository.getBooks({ title, description, genre });
    return books;
  }
}
