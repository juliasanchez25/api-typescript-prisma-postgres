import { Request, Response } from "express";
import { DeleteAuthorUseCase } from "./../../use-case/author/delete-author-use-case/DeleteAuthorUseCase";

export class DeleteAuthorController {
  constructor(private deleteAuthorUseCase: DeleteAuthorUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      await this.deleteAuthorUseCase.execute({ id: parseInt(id) });
      return res.status(200).json({
        message: "Author deleted successfully",
      });
    } catch (err) {
      return res.status(404).json({
        message: "Author not found",
      });
    }
  }
}
