const { randomBytes } = require("crypto");
const axios = require("axios")

const commentsByPostId = {};

const getComments = (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
};

const postComments = async (req, res) => {
    const id  = randomBytes(4).toString("hex")
    const newComments = req.body.comment;
    console.log(newComments)
    comments = commentsByPostId[req.params.id] || [];
    comments.push({id, comment:newComments})
    commentsByPostId[req.params.id] = comments;
    
    try {
         await axios.post("http://127.0.0.1:4005/events", {
            type: "CommentCreated",
            data: "comment"
        });
        // const {data} = await axios.post("http://127.0.0.1:4005/new1", {test: "nothing"})
        console.log("hello brother", "data");
        res.status(201).send(comments)
    } catch (e) {
        console.log("error..", e)
    }
}


module.exports = {
    getComments,
    postComments
}