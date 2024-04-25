import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3001;

app.post("/", (req: Request, res: Response) => {
  console.log(req.body)
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});