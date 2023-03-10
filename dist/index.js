"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ 'extended': false }));
app.use(adminRoutes_1.default);
app.listen(3000, () => {
    console.log('Server running on port ', 3000);
});
