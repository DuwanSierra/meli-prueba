import { Request, Response } from 'express';

export type Controller<T> = (
  req: Request,
  res: Response
) => Promise<Response<T>>;
