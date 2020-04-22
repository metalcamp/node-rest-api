import {Request, Response} from "express";

export let status = (req: Request, res: Response) => {
    res.status(200)
    res.send({'message': 'ok'});
};
