import { Request, Response } from "express";
import { BookRepository } from "../repositories/BookRepository";

export class DeleteBookController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const bookRepository = new BookRepository();

    try {
      await bookRepository.deleteBook({ id: parseInt(id) });
      return res.status(200).json({
        message: "Book deleted successfully",
      });
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
