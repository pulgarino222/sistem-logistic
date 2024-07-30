import { Router } from "express";
import pool from '../../config/db.js'
import { getButAll,InsertNewDataController} from "../controllers/warehousesControllers.js";


export const warehouserouter=Router()

warehouserouter.get('/',getButAll)
warehouserouter.post(`/`,InsertNewDataController)




const UpdateById=async(req,resp)=>{
    const findId= req.params.id
    const dataForUpdate={
        name:req.body.name,
        location:req.body.location
    }
    const dataThatUpdate= await modelsOfUpdate(dataForUpdate.name,dataForUpdate.location,findId)

    try{
        resp.status(203).json({
            message:"updated success",
            dataThatUpdate
        })
    }catch(err){
        throw new Error("error from controller of Update",err)

    }
}




async function modelsOfUpdate(name,location,id){
    try{
        const [update]= await pool.query('update warehouses set name=?, location=? where id=?',[dataForUpdate.name,dataForUpdate.location,findId])
        const dataThatWasUpdate= await pool.query('select * from warehouses where id=?',findId)
        return [[dataThatWasUpdate]]
    }catch(err){
        throw new Error('error in models for update',err)
    }
}

warehouserouter.put('/:id',UpdateById)






















