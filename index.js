"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const PORT = 3000;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.set("view engine", "ejs");
exports.app.use(express_1.default.json());
exports.app.get("/", (req, res) => {
    console.log("amogus");
    res.render("main");
});
exports.app.listen(PORT, () => { console.log("Listening on port " + PORT); });
