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
exports.createSlot = void 0;
const db_1 = __importDefault(require("../db"));
const createSlot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, timings } = req.body;
        const insertedSlot = yield db_1.default.query("INSERT INTO slot_table (id) VALUES ($1) RETURNING id", [id]);
        const slotId = insertedSlot.rows[0].id;
        const insertedTimings = yield Promise.all(timings.map((timing) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield db_1.default.query("INSERT INTO timings_table (day,start_time,end_time, slot_id) VALUES ($1,$2,$3,$4) RETURNING id", [timing.day, timing.start, timing.end, slotId]);
            return result;
        })));
        const newSlot = {
            id: slotId,
            timings,
        };
        return res.status(201).json({
            success: true,
            data: newSlot,
        });
    }
    catch (e) {
        return res.status(400).json({ "success": false, "error": String(e) });
    }
});
exports.createSlot = createSlot;
