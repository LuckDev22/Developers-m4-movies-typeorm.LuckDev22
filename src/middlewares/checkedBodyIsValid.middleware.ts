import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const checkedBodyIsValidMiddleware =
    (schema: ZodTypeAny) =>
    (req: Request, resp: Response, next: NextFunction) => {
        const data = schema.parse(req.body);
        req.body = data;

        return next();
    };
