import {Request, Response} from "express";

export let status = (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
};
