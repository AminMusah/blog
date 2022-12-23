const router = require('express').Router()
const {getUsers,updateUser,deleteUser, getUser} = require('../controllers/users')

router.get('/', getUsers)
router.get('/user/:id', getUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)


module.exports = router;