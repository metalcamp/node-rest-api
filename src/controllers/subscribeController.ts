import {Request, Response} from "express";
import {validationResult} from "express-validator";

export let subscribe = (req: Request, res: Response) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    // TODO subsribe to channel

    res.status(201)
    res.send()
};
