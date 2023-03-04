"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFaculty = exports.getFacultybyId = exports.getFaculty = void 0;
const db_1 = __importDefault(require("../db"));
const getFaculty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield db_1.default.query('SELECT * FROM faculty_table;');
        return res.status(200).json({ "success": true, "data": rows });
    }
    catch (e) {
        console.log(e);
        return res.status(400).json({ "success": false, "error": "error" });
    }
});
exports.getFaculty = getFaculty;
const getFacultybyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { rows } = yield db_1.default.query("SELECT * from faculty_table WHERE id=$1", [id]);
        return res.status(200).json({ "success": true, "data": rows[0] });
    }
    catch (e) {
        console.log(e);
        return res.status(400).json({ "success": false, "error": "error" });
    }
});
exports.getFacultybyId = getFacultybyId;
const createFaculty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name } = req.body;
        const response = yield db_1.default.query("INSERT INTO faculty_table(id,name) VALUES($1,$2)", [id, name]);
        return res.status(201).json({
            "success": true,
            "data": {
                "id": id,
                "name": name
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(400).json({ "success": false, "error": "error" });
    }
});
exports.createFaculty = createFaculty;
