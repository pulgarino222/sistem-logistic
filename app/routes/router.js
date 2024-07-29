import express from 'express'

export const routes=express()

routes.use('/warehouses', warehouserouter)
routes.use('/drivers', drivererouter)
routes.use('/shipments', shipmentrouter)
routes.use('/vehicles', vehiclerouter)