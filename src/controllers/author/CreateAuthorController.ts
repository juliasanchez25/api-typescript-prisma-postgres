import { Request, Response } from "express";
import { AuthorRepository } from "../../repositories/author/AuthorRepository";

export class CreateAuthorController {
  async handle(req: Request, res: Response) {
    const authorRepository = new AuthorRepository();
    const author = await authorRepository.createAuthor(req.body);
    res.status(201).json(author);
  }
}
