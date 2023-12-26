import { Request, Response } from "express";
import { GetAuthorsUseCase } from "../../use-case/author/get-authors-use-case/GetAuthorsUseCase";
export class GetAuthorsController {
  constructor(private readonly getAuthorsUseCase: GetAuthorsUseCase) {}

  async handle(req: Request, res: Response) {
    const authors = await this.getAuthorsUseCase.execute();
    res.status(200).json(authors);
  }
}
