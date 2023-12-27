import { Book } from "@prisma/client";
import { CreateBookParams } from "./dtos/CreateBookParams";
import { UpdateBookParams } from "./dtos/UpdateBookParams";
import { GetBookParams } from "./dtos/GetBookParams";
import { DeleteBookParams } from "./dtos/DeleteBookParams";
import { GetBooksParams } from "./dtos/GetBooksParams";

export interface IBookRepository {
  createBook: (params: CreateBookParams) => Promise<Book>;
  updateBook: (params: UpdateBookParams) => Promise<Book>;
  getBook: (params: GetBookParams) => Promise<Book>;
  getBooks: (params: GetBooksParams) => Promise<Book[]>;
  deleteBook: (params: DeleteBookParams) => Promise<void>;
}
