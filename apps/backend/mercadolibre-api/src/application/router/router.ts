import { Request, Response } from 'express';
import {
  itemByIdFinder,
  itemsFinderController,
} from '../controllers/itemsFinder';

const { Router } = require('express');
const router = Router();

router.get('/items', (req: Request, res: Response) => {
  return itemsFinderController(req, res);
});

router.get('/items/:id', (req: Request, res: Response) => {
  return itemByIdFinder(req, res);
});

module.exports = router;
