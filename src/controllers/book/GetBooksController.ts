import { Request, Response } from "express";
import { GetBooksUseCase } from "../../use-case/book/get-books-use-case/GetBooksUseCase";

export class GetBooksController {
  constructor(private readonly getBooksUseCase: GetBooksUseCase) {}

  async handle(req: Request, res: Response) {
    const title = req.query.title as string;
    const description = req.query.description as string;
    const genre = req.query.genre as string;

    const books = await this.getBooksUseCase.execute({
      title,
      description,
      genre,
    });
    return res.status(200).json(books);
  }
}
