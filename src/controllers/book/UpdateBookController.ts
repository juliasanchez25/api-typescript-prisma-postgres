import { Request, Response } from "express";
import { UpdateBookUseCase } from "src/use-case/book/update-book-use-case/UpdateBookUseCase";

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const body = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      const book = await this.updateBookUseCase.execute({
        id: parseInt(id),
        ...body,
      });
      return res.status(200).json(book);
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
