import multer from 'multer'
import {Request, Response} from 'express'
import path from 'path'

export default{
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (req: Request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`
            cb(null,fileName)
        }
    })
}