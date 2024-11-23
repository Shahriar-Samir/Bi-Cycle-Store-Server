import { Request, Response } from 'express';
import bicycleService from './bicycle.service';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleData = req.body;
    const result = await bicycleService.createBicycleInDB(bicycleData);
    res.json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.json({
      message: 'Something went wrong',
      success: false,
      error: err,
      stack: err.stack,
    });
  }
};

export default {
  createBicycle,
};
