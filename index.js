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
app.use(cors(

    {
        origin: ["https://mern-anime-tracker-front.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true

    }
));
app.use(express.json());
//haha
// Routes

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
