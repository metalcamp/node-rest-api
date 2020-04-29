import express from "express";

export default (fn: express.RequestHandler) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("promise");
    Promise.resolve(fn(req, res, next)).catch(next);
};
