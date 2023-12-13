import { Request, Response } from "express";
import { GetBookUseCase } from "../../use-case/book/get-book-use-case/GetBookUseCase";

export class GetBookController {
  constructor(private getBookUseCase: GetBookUseCase) {}

  async handle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID not send",
      });
    }

    try {
      const book = await this.getBookUseCase.execute({ id: parseInt(id) });
      return res.status(200).json(book);
    } catch (err) {
      return res.status(404).json({
        message: "Book not found",
      });
    }
  }
}
