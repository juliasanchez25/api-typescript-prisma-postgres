import { Request, Response } from "express";
import { AuthorRepository } from "../../repositories/author/AuthorRepository";

export class GetAuthorsController {
  async handle(req: Request, res: Response) {
    const authorRepository = new AuthorRepository();
    const authors = await authorRepository.getAuthors();
    res.status(200).json(authors);
  }
}
