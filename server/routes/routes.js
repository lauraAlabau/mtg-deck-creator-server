import express from 'express'
import { Register } from '../controller/userController.js'
const router = express.Router()
import { body } from 'express-validator'


router.post('/register', [
  body('name').trim().notEmpty().withMessage("Name should not be empty"),
  body('email').trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Invalid email"),
  body('password').trim().notEmpty().withMessage("Passwrod should not be empty").isLength({ min: 8, max: 20 }).withMessage("Password length should be 8 to 20 char")
], Register)

export { router as Router }