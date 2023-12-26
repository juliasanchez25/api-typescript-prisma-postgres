import { Request, Response } from "express";
import { CreateAuthorUseCase } from "./../../use-case/author/create-author-use-case/CreateAuthorUseCase";

export class CreateAuthorController {
  constructor(private readonly createAuthorUseCase: CreateAuthorUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const author = await this.createAuthorUseCase.execute(req.body);
      res.status(201).json(author);
    } catch (err) {
      res.status(400).json({ message: "Not able to create author" });
    }
  }
}
