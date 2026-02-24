import type { NextFunction, Request, Response } from "express";

export class GroupControllers {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json("OK");
    } catch (error) {
      next(error);
    }
  }
}
