"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersManager = void 0;
class NumbersManager {
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}
exports.NumbersManager = NumbersManager;
