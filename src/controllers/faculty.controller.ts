import {Request,Response} from 'express'; 
import { QueryResult } from 'pg';
import pool from '../db';


export const getFaculty = async(req:Request,res:Response):Promise<Response> =>{
    try{
        const { rows } = await pool.query('SELECT * FROM faculty_table;');        
        return res.status(200).json({"success": true, "data": rows});
    }
    catch(e){
        console.log(e);
        return res.status(400).json({"success":false,"error":"error"});
    }
}

export const getFacultybyId = async(req:Request,res:Response):Promise<Response> =>{
    try{
        const id = req.params.id;
        const {rows} = await pool.query("SELECT * from faculty_table WHERE id=$1",[id]);
        return res.status(200).json({"success": true, "data": rows[0] });
    }
    catch(e){
        console.log(e);
        return res.status(400).json({"success":false,"error":"error"});
    }
}

export const createFaculty = async(req:Request,res:Response):Promise<Response> =>{
    try{
        const {id,name} = req.body;
        const response: QueryResult = await pool.query("INSERT INTO faculty_table(id,name) VALUES($1,$2)",[id,name]);
        return res.status(201).json({
            "success":true,
            "data": {
                "id": id,
                "name": name
            }
        })
    }
    catch(e){
        console.log(e);
        return res.status(400).json({"success":false,"error":"error"});
    }
}
