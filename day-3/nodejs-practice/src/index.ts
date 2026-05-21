import express, { type NextFunction, type Request, type Response } from "express";

const app = express();
const PORT = 3005;

// built in middleware to parse request body JSoN data
app.use(express.json());

// Global logger middleware
const loggerMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const currentDateAndTimeStamp = new Date().toString();
    console.log(`[${currentDateAndTimeStamp}] ${req.method} request made from/to ${req.url}`);
    next();
}

app.use(loggerMiddleware);

app.get('/', (req: Request, res: Response)=>{
    res.send('Could you please check your console log for the logging???')
})




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
