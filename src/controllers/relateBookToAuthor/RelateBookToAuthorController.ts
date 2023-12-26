import { Request, Response } from "express";
import { RelateBookToAuthorRepository } from "../../repositories/relateBookToAuthor/RelateBookToAuthorRepository";
import { RelateBookToAuthorUseCase } from "../../use-case/relateBookToAuthor/RelateBookToAuthorUseCase";

export class RelateBookToAuthorController {
  constructor(private relateBookToAuthorUseCase: RelateBookToAuthorUseCase) {}

  async handle(req: Request, res: Response) {
    const authorId = req.body.authorId;
    const bookId = req.body.bookId;

    if (!authorId || !bookId) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      const relateBookToAuthor = await this.relateBookToAuthorUseCase.execute({
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
