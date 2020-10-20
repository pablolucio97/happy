import { Request, Response } from "express";
import {getRepository} from 'typeorm'

import Orphanage from '../models/Orphanage'
import orphanageView from '../views/orphanages_view'

import * as Yup from 'yup'

export default{
    async createOrphanage(req: Request, res: Response){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body

        const requestImages = req.files as Express.Multer.File[]

        const images = requestImages.map(image => {
            return {path : image.filename}
        })
    
        const orphanagesRepository = getRepository(Orphanage)
    
        const data = {  
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
            }))
        })

        await schema.validate(data, {
            abortEarly: false
        })

    
        const newOrphanage = orphanagesRepository.create(data)
        
        await orphanagesRepository.save(newOrphanage)
    
        return res.status(201).json(newOrphanage)
    },

    async listOrphanages (req: Request, res: Response){
        
        const listOprhanges = getRepository(Orphanage)
        const  returnedOrphanegs = await listOprhanges.find({
            relations: ['images']
        })

        return res.status(200).json(orphanageView.renderManys(returnedOrphanegs))
    },

    async showOrphanage(req: Request, res: Response){

        const {id} = req.params

        const showOrphange = getRepository(Orphanage)
        const returnedOrphanage = await showOrphange.findOneOrFail(id, {
            relations: ['images']
        })
        return res.status(200).json(orphanageView.render(returnedOrphanage))
    }
}