import {Request, Response} from "express";

export let unsubscribe = (req: Request, res: Response) => {
    //TODO validation
    console.log(req.body);
    res.status(201)
};
