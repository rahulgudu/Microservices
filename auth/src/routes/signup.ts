import express, { type Request, type Response } from "express";

import {body} from "express-validator";


const router = express.Router();

router.post("/api/users/signup", [
    body("email")
        .isEmail()
        .withMessage("Email must be validated"),
    body("password")
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage("Password must be between 4 to 20")
], (req: Request, res: Response) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).send({
            message: "Email and password are required"
        });
    }



});

export { router as signupRouter };