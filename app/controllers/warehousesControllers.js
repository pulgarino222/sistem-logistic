import {viewAllInformation,InsertNewDataModel} from '../models/wharehouseModels.js'


export const getButAll=async (req,resp)=>{
    
    const wharehousesInfo=await viewAllInformation()
     // console.log(wharehousesInfo[0])  //solo estamos viendo que me esta trayendo con el [0] desestructuramos para que solo nos traiga un array 
     try{
         if(wharehousesInfo){
             resp.json({
                 message: `all info in your view`,
                 wharehousesInfo
             })
         }
     }catch(err){
         resp.json({
             message:`error obtaining the infomation${err}`
         })
     }
 }

 export const InsertNewDataController=async(req,resp)=>{
    const {name,location}=req.body
    const viewWarehouse=await InsertNewDataModel(name,location)
    
    try {
        resp.status(201).json({
            message:"created success",
            viewWarehouse
        })
    } catch (error) {
        throw new Error("no insert nothing in the post function controller ",error)   
    }
}

