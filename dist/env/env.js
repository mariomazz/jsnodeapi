"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envName = exports.serverPort = void 0;
function serverPort() {
    return process.argv[3];
}
exports.serverPort = serverPort;
function envName() {
    return process.argv[2];
}
exports.envName = envName;
