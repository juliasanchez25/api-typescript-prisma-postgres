import { Request, Response } from "express";
import { DeleteBookUseCase } from "../../use-case/book/delete-book-use-case/DeleteBookUseCase";

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      await this.deleteBookUseCase.execute({ id: parseInt(id) });
      return res.status(200).json({
        message: "Book deleted successfully",
      });
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
