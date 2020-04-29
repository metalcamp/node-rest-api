import express, {Request, Response, Router} from "express";
import AsyncMiddleware from "../middlewares/AsyncMiddleware";

const router: Router = express.Router();

router.get('/', AsyncMiddleware(async (req: Request, res: Response) => {
        res.status(200)
        res.send({'message': 'ok'});
    })
);

export default router;
