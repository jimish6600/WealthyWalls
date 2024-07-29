import express from "express"

const postRouter = express.Router()

postRouter.get("/test",(res,res)=>{
    console.log("router works!")
})

export default postRouter