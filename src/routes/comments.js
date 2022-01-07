const express = require("express");
const {getComments, postComments} = require('../controller/commentsController')

const router = express.Router();

router.get('/posts/:id/comments', getComments);
router.post("/posts/:id/comments", postComments);

router.post("/events", (req, res) => {
    console.log("comment event fired");
     
    res.send({})
})

module.exports = router;  
