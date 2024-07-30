import pool from "../../config/db.js";

export async function viewAllInformation(){
    try{
        let driversInfo = await pool.query('select * from drivers')
        driversInfo=driversInfo[0]
        return driversInfo
    }catch(err){
        throw new Error (`error in the models view all information ${err}`)
    }
}

export async function modelByGetId(id){
    try {
        const [[data]]= await pool.query('SELECT * FROM drivers WHERE id=?',id)
        return data
    } catch (error) {
        throw new Error('error in model of getByid',error)
    }
}


export async function InsertNewDataModel(name,shipmentsId){
    try{
    const [objectInner]= await pool.query('insert into drivers(name,shipments_id) values(?,?)',[name,shipmentsId])
    const [[viewDrivers]] = await pool.query('select * from drivers where id = ?',[objectInner.insertId])
    return viewDrivers
    }catch(err){
        throw new Error(`not was possible insert new data `,err)
    }
}

export async function modelsOfUpdate(name,shipmentsId,id){
    try{
        const [update]= await pool.query('update drivers set name=?, shipments_id=? where id=?',[name,shipmentsId,id])
        const dataThatWasUpdate= await pool.query('select * from drivers where id=?',id)
        return [[dataThatWasUpdate]]
    }catch(err){
        throw new Error('error in models for update',err)
    }
}

export async function modelDelete(id){
    try{
    const [[obejectDelete]]= await pool.query(`SELECT * FROM drivers WHERE id=?`, id)
        const deleteObject= await pool.query('DELETE from drivers where id=?', id)
        return [obejectDelete,deleteObject]
        
    }catch(err){
        throw new Error('error in model for delete',err)
    }
}