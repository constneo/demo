import { Router } from 'oka'
import Controller from '../controllers/mod.ts'

const router = new Router()

router.get('/', Controller.getData)

export default router
