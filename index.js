// const express = require('express');
// const connectDB = require('./config/db');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// //require('dotenv').config('{path:D:/reactproectsreal/MERNAnimeDB/MERN-AnimeTracker/backend/.env}');

// const app = express();

// // Connect to database
// connectDB();

// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Origin",
//         "https://mern-anime-tracker-front.vercel.app"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Private-Network", true);
//     //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//     res.setHeader("Access-Control-Max-Age", 7200);

//     next();
// });

// // Middleware
// app.use(cors({
//     origin: 'https://mern-anime-tracker-front.vercel.app', // Frontend URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
// }));

// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//     res.json("Hello");
// });

// // Routes
// app.use('/api/users', userRoutes);

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//new try 

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
