import express from 'express'
import { CreateAuthorController } from '../controllers/author/CreateAuthorController'
import { UpdateAuthorController } from '../controllers/author/UpdateAuthorController'
import { GetAuthorController } from '../controllers/author/GetAuthorController'
import { GetAuthorsController } from '../controllers/author/GetAuthorsController'
import { DeleteAuthorController } from '../controllers/author/DeleteAuthorController'

const authorRouter = express.Router()
const getAuthorController = new GetAuthorController()
const getAuthorsController = new GetAuthorsController()
const createAuthorController = new CreateAuthorController()
const updateAuthorController = new UpdateAuthorController()
const deleteAuthorController = new DeleteAuthorController()

authorRouter.get('/author/:id', getAuthorController.handle)
authorRouter.get('/authors', getAuthorsController.handle)
authorRouter.post('/author', createAuthorController.handle)
authorRouter.patch('/author/:id', updateAuthorController.handle)
authorRouter.delete('/author/:id', deleteAuthorController.handle)

export { authorRouter }
