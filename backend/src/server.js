import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;

// middleware to parse JSON
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter);



// would be used for auth check and rate limiting, this is an example of the middleware

// app.use((req, res, next)=> {
//     console.log("We just got a new request!");
//     next();
// });

app.use("/api/notes", notesRoutes)

connectDB().then (() => {
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });
});
