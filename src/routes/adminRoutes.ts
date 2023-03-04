import {Router} from 'express';
const router = Router();

import { getFaculty, getFacultybyId,createFaculty } from '../controllers/faculty.controller';
import { getStudent,getStudentbyId,createStudent } from '../controllers/student.controller';

import {createSlot} from '../controllers/slots.controller';
// import {login} from '../controllers/login.controller'

// router.post('/login',createStudent);

router.get('/admin/faculty',getFaculty);
router.get('/admin/faculty/:id',getFacultybyId);
router.post('/admin/faculty',createFaculty);

router.get('/admin/student',getStudent);
router.get('/admin/student/:id',getStudentbyId);
router.post('/admin/student',createStudent);

router.post('/admin/slot',createSlot);
export default router;