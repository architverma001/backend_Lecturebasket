import { Router } from "express";
import { generatepayment } from './../controllers/payment.controller.js';

const router = Router()

router.post("/", generatepayment)



export default router;