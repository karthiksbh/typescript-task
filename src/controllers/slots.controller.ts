import {Request,Response} from 'express'; 
import { QueryResult } from 'pg';
import pool from '../db';

interface Timings {
    day: string;
    start: string;
    end: string;
}

interface Slot {
    id: number;
    timings: Timings[];
  }


export const createSlot = async(req:Request,res:Response):Promise<Response> =>{
    try{
        const {id,timings} = req.body;  

        const insertedSlot: QueryResult = await pool.query("INSERT INTO slot_table (id) VALUES ($1) RETURNING id",[id]);
        const slotId: number = insertedSlot.rows[0].id;

        const insertedTimings: QueryResult[] = await Promise.all(
            timings.map(async (timing: Timings) => {
              const result: QueryResult = await pool.query(
                "INSERT INTO timings_table (day,start_time,end_time, slot_id) VALUES ($1,$2,$3,$4) RETURNING id",
                [timing.day,timing.start,timing.end, slotId]
              );
              return result;
            })
          );
      
          const newSlot: Slot = {
            id: slotId,
            timings,
            };
      
          return res.status(201).json({
            success: true,
            data: newSlot,
          });
    }
    catch(e){
        return res.status(400).json({"success":false,"error":String(e)});
    }
}
