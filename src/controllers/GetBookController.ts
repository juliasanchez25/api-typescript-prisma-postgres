import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRepository";

export class GetBookController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const bookRepository = new BookRepository();

    try {
      const book = await bookRepository.getBook({ id: parseInt(id) });
      return res.status(200).json(book);
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
