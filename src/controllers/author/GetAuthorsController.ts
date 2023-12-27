import { Request, Response } from "express";
import { GetAuthorsUseCase } from "../../use-case/author/get-authors-use-case/GetAuthorsUseCase";
export class GetAuthorsController {
  constructor(private readonly getAuthorsUseCase: GetAuthorsUseCase) {}

  async handle(req: Request, res: Response) {
    const name = req.query.name as string;
    const email = req.query.email as string;

    const authors = await this.getAuthorsUseCase.execute({ name, email });
    res.status(200).json(authors);
  }
}
