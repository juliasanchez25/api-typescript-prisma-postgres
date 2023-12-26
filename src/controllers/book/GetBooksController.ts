import { Request, Response } from "express";
import { GetBooksUseCase } from "../../use-case/book/get-books-use-case/GetBooksUseCase";

export class GetBooksController {
  constructor(private readonly getBooksUseCase: GetBooksUseCase) {}

  async handle(req: Request, res: Response) {
    const books = await this.getBooksUseCase.execute();
    return res.status(200).json(books);
  }
}
