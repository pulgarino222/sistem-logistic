import express from 'express'
import { warehouserouter } from '../views/wharehouses.js'

export const routes=express()

routes.use('/warehouses', warehouserouter)
// routes.use('/drivers', drivererouter)
// routes.use('/shipments', shipmentrouter)
// routes.use('/vehicles', vehiclerouter)