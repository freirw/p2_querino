"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axiosInstance = axios_1.default.create({
    baseURL: "http://localhost:3000", // URL do seu backend
    headers: {
        "Content-Type": "application/json",
    },
});
exports.default = axiosInstance;
