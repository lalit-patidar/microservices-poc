const express = require("express");
const cors = require("cors")
const commentsRouters = require("./src/routes/comments")

const app = express();

app.use(express.json());
app.use(cors())
app.use(commentsRouters)

app.listen(4001, () => console.log(4001 + "running"))