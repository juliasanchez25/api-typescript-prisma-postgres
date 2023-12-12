import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRepository";

export class CreateBookController {
  async handle(req: Request, res: Response) {
    const bookRepository = new BookRepository();
    const book = await bookRepository.createBook(req.body);
    res.status(201).json(book);
  }
}
