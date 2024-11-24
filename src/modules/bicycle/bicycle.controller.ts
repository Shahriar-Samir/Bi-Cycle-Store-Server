import { NextFunction, Request, Response } from 'express';
import bicycleService from './bicycle.service';

const createBicycle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bicycleData = req.body;
    const result = await bicycleService.createBicycleInDB(bicycleData);
    res.json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBicycles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await bicycleService.getAllBicyclesFromDB(searchTerm);
    res.json({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBicycle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { productId } = req.params;
    const result = await bicycleService.getBicycleFromDB(productId);
    res.json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateBicycle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    const result = await bicycleService.updateBicycleFromDB(
      productId,
      updatedData,
    );
    res.json({
      message: 'Bicycle updated successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBicycle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await bicycleService.deleteBicycleFromDB(productId);
    res.json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export default {
  createBicycle,
  getAllBicycles,
  getBicycle,
  updateBicycle,
  deleteBicycle,
};
