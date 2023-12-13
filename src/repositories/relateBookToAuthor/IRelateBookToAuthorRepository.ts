import { Book } from "@prisma/client";
import { RelateBookToAuthorParams } from "./dtos/RelateBookToAuthorParams";

export interface IRelateBookToAuthorRepository {
  relateBookToAuthor: (params: RelateBookToAuthorParams) => Promise<Book>;
}
