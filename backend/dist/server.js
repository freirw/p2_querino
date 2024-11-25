"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
// server.ts
const config_1 = require("./config");
function startServer(app) {
    console.log(`Servidor iniciado na porta ${config_1.config.port} com`, app);
}
