const {createPost, getPosts, updatePost, deletePost, getPost} = require('../controllers/posts')
const router = require('express').Router()

router.get('/posts', getPosts)
router.get('/post/:id', getPost)
router.post('/createpost', createPost)
router.post('/updatepost/:id', updatePost)
router.delete('/deletepost/:id', deletePost)

module.exports = router;