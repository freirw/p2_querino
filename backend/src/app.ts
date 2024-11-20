import express, { Request, Response } from "express";

export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
