import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
){
    
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try{
        const { sub } = verify(token, "b7c089e7fe361a16bc39ea4d1f426b5b") as IPayload;

        request.user_id = sub;
        return next();
    } catch(err){
        return response.status(401).end();
    }
}
