import pool from '../../config/db.js'


export async function viewAllInformation(){
    
    try{
        let wharehousesInfo = await pool.query('select * from warehouses')
        wharehousesInfo=wharehousesInfo[0]
        return wharehousesInfo
    }catch(err){
        throw new Error (`error in the models view all information ${err}`)
    }
}


export async function InsertNewDataModel(name,location){
    try{
    const [objectInner]= await pool.query('insert into warehouses(name,location) values(?,?)',[name,location])
    const [[viewWarehouse]] = await pool.query('select * from warehouses where id = ?',[objectInner.insertId])
    return viewWarehouse
    }catch(err){
        throw new Error(`not was possible insert new data `,err)
    }
}