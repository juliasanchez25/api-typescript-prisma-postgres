import { Request, Response } from "express";
import { UpdateAuthorUseCase } from "../../use-case/author/update-author-use-case/UpdateAuthorUseCase";

export class UpdateAuthorController {
  constructor(private updateAuthorUseCase: UpdateAuthorUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      const author = await this.updateAuthorUseCase.execute({
        id: parseInt(id),
        ...body,
      });
      return res.status(200).json(author);
    } catch (err) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
  }
}
