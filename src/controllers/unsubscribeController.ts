import {Request, Response} from "express";
import {validationResult} from "express-validator";

export let unsubscribe = (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    // TODO unsubscribe

    console.log(req.body);
    res.status(201)
};
