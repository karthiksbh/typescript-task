"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const faculty_controller_1 = require("../controllers/faculty.controller");
router.get('/admin/faculty', faculty_controller_1.getFaculty);
router.get('/admin/faculty/:id', faculty_controller_1.getFacultybyId);
exports.default = router;
