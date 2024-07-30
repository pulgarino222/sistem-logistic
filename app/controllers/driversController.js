import { viewAllInformation,modelByGetId,InsertNewDataModel,modelsOfUpdate,modelDelete} from "../models/driversModels.js"


function findId(req){
    const findId= req.params.id
    return findId
}

export const getButAll=async (req,resp)=>{
    const driversInfo=await viewAllInformation()
     // console.log(wharehousesInfo[0])  //solo estamos viendo que me esta trayendo con el [0] desestructuramos para que solo nos traiga un array 
     try{
         if(driversInfo){
             resp.json({
                 message: `all info in your view`,
                 driversInfo
             })
         }
     }catch(err){
         resp.json({
             message:`error obtaining the infomation${err}`
         })
     }
 }

 export const getById=async(req,resp)=>{
    try {
        const id=findId(req)
    const data= await modelByGetId(id)
        if(!data){
            resp.status(404).send(
                'the information do not finded'
            )
        }else{resp.status(200).json({
            message:'information in your screen',
            data
        })}
        
    } catch (error) {
        throw new Error(`can't find the informacion was a error drivers  `,error)
    } 
}


export const InsertNewDataController=async(req,resp)=>{
    const {name,shipments_id}=req.body
    const viewDrivers=await InsertNewDataModel(name,shipments_id)
    
    try {
        resp.status(201).json({
            message:"created success",
            viewDrivers
        })
    } catch (error) {
        throw new Error("no insert nothing in the post function controller drivers ",error)   
    }
}

export const UpdateById=async(req,resp)=>{
    
    const dataForUpdate={
        name:req.body.name,
        shipmentsID:req.body.shipments_id
    }
    const [[[dataThatUpdate]]]= await modelsOfUpdate(dataForUpdate.name,dataForUpdate.shipmentsID,findId(req))

    try{
        resp.status(203).json({
            message:"updated success",
            dataThatUpdate
        })
    }catch(err){
        throw new Error("error from controller of Update ",err)
    }
}

export const deleteById=async(req,resp)=>{
    const deleteObject=await modelDelete(findId(req))
    try {
        resp.status(201).json({
         message:'object was deleted',
         deleteObject
         
    })
} catch (error) {
        throw new Error(`error in try to delete object`,error)
    }
   
}
