const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
//require('dotenv').config('{path:D:/reactproectsreal/MERNAnimeDB/MERN-AnimeTracker/backend/.env}');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
    origin: 'https://mern-anime-tracker-front.vercel.app', // Frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json("Hello");
});

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
