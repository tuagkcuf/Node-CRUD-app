import controller from '../controllers/users'   
import express from 'express'

const router = express.Router()

//CRUD Routes /users
router.get('/', controller.getUsers) // /users
router.get('/:userId', controller.getUser) // /:userId
router.post('/', controller.createUser)
router.put('/:userId', controller.updateUser)
router.delete('/:userId', controller.deleteUser)