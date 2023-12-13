import { Author } from "@prisma/client";
import { CreateAuthorParams } from "./dtos/CreateAuthorParams";
import { UpdateAuthorParams } from "./dtos/UpdateAuthorParams";
import { GetAuthorParams } from "./dtos/GetAuthorParams";
import { DeleteAuthorParams } from "./dtos/DeleteAuthorParams";

export interface IAuthorRepository {
  createAuthor: (params: CreateAuthorParams) => Promise<Author>;
  updateAuthor: (params: UpdateAuthorParams) => Promise<Author>;
  getAuthor: (params: GetAuthorParams) => Promise<Author>;
  getAuthors: () => Promise<Author[]>;
  deleteAuthor: (params: DeleteAuthorParams) => Promise<void>;
}
