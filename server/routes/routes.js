import express from 'express'

import { Register, Login, Auth } from '../controller/userController.js'
import { body } from 'express-validator'
import { VerifyUser } from '../middleware/VerifyUser.js'

const router = express.Router()

router.post('/register', [
  body('name').trim().notEmpty().withMessage("Name should not be empty"),
  body('email').trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Invalid email"),
  body('password').trim().notEmpty().withMessage("Passwrod should not be empty").isLength({ min: 8, max: 20 }).withMessage("Password length should be 8 to 20 char")
], Register)

router.post('/login', [
  body('email').trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Invalid email"),
  body('password').trim().notEmpty().withMessage("Passwrod should not be empty").isLength({ min: 8, max: 20 }).withMessage("Password length should be 8 to 20 char")
], Login)

router.get('/verify', VerifyUser, Auth)

export { router as Router }