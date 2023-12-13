import { Request, Response } from "express";
import { CreateBookUseCase } from "../../use-case/book/create-book-use-case/CreateBookUseCase";

export class CreateBookController {
  constructor(private readonly createBookUseCase: CreateBookUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const book = await this.createBookUseCase.execute(req.body);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ message: "Not able to create book" });
    }
  }
}
