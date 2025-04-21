import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleInputError = (req: Request, res: Response, next: NextFunction): void => {
    
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            errors: errors.array(),
        });
    }


    next();
}