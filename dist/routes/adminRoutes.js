"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const faculty_controller_1 = require("../controllers/faculty.controller");
const student_controller_1 = require("../controllers/student.controller");
const slots_controller_1 = require("../controllers/slots.controller");
router.get('/admin/faculty', faculty_controller_1.getFaculty);
router.get('/admin/faculty/:id', faculty_controller_1.getFacultybyId);
router.post('/admin/faculty', faculty_controller_1.createFaculty);
router.get('/admin/student', student_controller_1.getStudent);
router.get('/admin/student/:id', student_controller_1.getStudentbyId);
router.post('/admin/student', student_controller_1.createStudent);
router.post('/admin/slot', slots_controller_1.createSlot);
exports.default = router;