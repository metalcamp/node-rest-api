import {Request, Response} from "express";

export let publish = (req: Request, res: Response) => {
    //TODO validation
    console.log(req.body);
    res.status(201)
};
