import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRepository";

export class GetBooksController {
  async handle(req: Request, res: Response) {
    const bookRepository = new BookRepository();
    const book = await bookRepository.getBooks();
    res.status(200).json(book);
  }
}
