import { Request, Response } from "express";
import { BookRepository } from "../../repositories/book/BookRepository";

export class GetBooksController {
  async handle(req: Request, res: Response) {
    const bookRepository = new BookRepository();
    const books = await bookRepository.getBooks();
    res.status(200).json(books);
  }
}
