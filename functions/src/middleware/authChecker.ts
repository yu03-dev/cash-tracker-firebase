import { NextFunction, Request, Response } from "express";
import { auth } from "../config";

export const authChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idToken = req.get("authorization");
  if (!idToken) {
    res.status(401).send({ error: "Unauthorized" });
  } else {
    try {
      const decodedToken = await auth.verifyIdToken(idToken);
      res.locals.uid = decodedToken.uid;
      next();
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }
};
