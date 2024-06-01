import { Router } from "express";
import { validateBody } from "../middleware/validate.js";
import catchAsyncErrors from '../util/catch-async-errors.js'
import * as userController from '../controllers/users.js'
import createOrPutUserSchema from '../services/users/schema/create-or-put-user.json' with { type: "json" }

const router = Router()
router
  .get('/:id(\\d+)', catchAsyncErrors(userController.getUser))
  .post('/', validateBody(createOrPutUserSchema), catchAsyncErrors(userController.createUser))
  .put('/:id(\\d+)', validateBody(createOrPutUserSchema), catchAsyncErrors(userController.putUser))
  .delete('/:id(\\d+)', catchAsyncErrors(userController.deleteUser))

export default router
