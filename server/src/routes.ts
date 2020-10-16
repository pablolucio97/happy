import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'

import OrphangesController from './controllers/OrphanagesController'

const routes = Router()

const upload = multer(uploadConfig)

routes.post('/orphanages', upload.array('images'), OrphangesController.createOrphanage)
routes.get('/orphanages', OrphangesController.listOrphanages)
routes.get('/orphanages/:id', OrphangesController.showOrphanage)

export default routes
