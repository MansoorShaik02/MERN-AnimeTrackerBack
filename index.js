const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
//require('dotenv').config('{path:D:/reactproectsreal/MERNAnimeDB/MERN-AnimeTracker/backend/.env}');


const app = express();

// Connect to database
connectDB();

// Middleware
app.get("/", (req, res) => {
    res.json("Hello")
})
app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "React app URL"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// app.use(cors(

//     {
//         origin: ["https://mern-anime-tracker-front.vercel.app/"],
//         methods: ["POST", "GET"],
//         credentials: true

//     }
// ));
app.use(express.json());
//haha
// Routes

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
