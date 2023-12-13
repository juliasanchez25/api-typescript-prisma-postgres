import { Request, Response } from "express";
import { BookRepository } from "../../repositories/book/BookRepository";

export class UpdateBookController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const bookRepository = new BookRepository();

    try {
      const book = await bookRepository.updateBook({
        id: parseInt(id),
        ...body,
      });
      return res.status(200).json(book);
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
