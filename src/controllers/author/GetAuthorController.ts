import { Request, Response } from "express";
import { GetAuthorUseCase } from "../../use-case/author/get-author-use-case/GetAuthorUseCase";

export class GetAuthorController {
  constructor(private getAuthorUseCase: GetAuthorUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      const author = await this.getAuthorUseCase.execute({ id: parseInt(id) });
      return res.status(200).json(author);
    } catch (err) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
  }
}
