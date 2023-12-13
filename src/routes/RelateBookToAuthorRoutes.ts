import express from 'express'
import { RelateBookToAuthorController } from '../controllers/relateBookToAuthor/RelateBookToAuthorController'

const relateBookToAuthorRouter = express.Router()
const relateBookToAuthorController = new RelateBookToAuthorController()

relateBookToAuthorRouter.patch(
  '/relateBookToAuthor',
  relateBookToAuthorController.handle
)

export { relateBookToAuthorRouter }
