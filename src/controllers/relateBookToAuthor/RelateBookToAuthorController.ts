import { Request, Response } from "express";
import { RelateBookToAuthorRepository } from "../../repositories/relateBookToAuthor/RelateBookToAuthorRepository";

export class RelateBookToAuthorController {
  async handle(req: Request, res: Response) {
    const authorId = req.body.authorId;
    const bookId = req.body.bookId;

    if (!authorId || !bookId) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    const relateBookToAuthorRepository = new RelateBookToAuthorRepository();

    try {
      const relateBookToAuthor =
        await relateBookToAuthorRepository.relateBookToAuthor({
          authorId: parseInt(authorId),
          bookId: parseInt(bookId),
        });
      return res.status(200).json(relateBookToAuthor);
    } catch (err) {
      return res.status(404).json({
        message: "Error to relate book to author",
      });
    }
  }
}
