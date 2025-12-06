import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import { connect } from "mongoose";

const app = express()

connectDB();

app.use("/api/notes", notesRoutes)
// app.get("/api/notes", (req,res) => {
//     res.status(200).send("you got 20 notes");
// })

// app.post("api/notes", (req,res) => {
//     res.status(201).json({message: "note created successfully"});
// })

// app.put("api/notes/:id", (req,res) => {
//     res.status(200).json({message: "note updated successfully"});
// })

// app.delete("api/notes/:id", (req,res) => {
//     res.status(200).json({message: "post deleted successfully"});
// })


app.listen(5001, () => {
    console.log("Server is running on port 5001")
});
