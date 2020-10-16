"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
function encrypt(pwd) {
    return Buffer.from(pwd).toString("base64");
}
exports.encrypt = encrypt;
function decrypt(password) {
    return Buffer.from(password, "base64").toString("utf-8");
}
exports.decrypt = decrypt;
