import http from "http";
import { app } from "./app";
import express, { Request, Response } from "express";

export const startServer = (app: express.Express) => {
  const server = http.createServer(app);
  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};
