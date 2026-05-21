// Create the server

import express, { type Request, type Response } from 'express';

// 1. Init the express application
const app = express();

// 2. Define the port
const PORT = 3005;

// 3. Define a route
app.get('/', (req:Request, res: Response)=>{
    res.send("Hello, This is first api from expressjs");
})

app.get('/test-me', (req:Request, res: Response)=>{
    res.send("Hello Test!!")
})

// 4. Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})