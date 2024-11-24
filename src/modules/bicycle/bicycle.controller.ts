import { Request, Response } from 'express';
import bicycleService from './bicycle.service';

// create bicycle data on database
const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleData = req.body;
    const result = await bicycleService.createBicycleInDB(bicycleData);
    res.json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(400).json({
        message: err,
        success: false,
        error: err,
      });
    }
  }
};

// get bicycle data from database
const getAllBicycles = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const result = await bicycleService.getAllBicyclesFromDB(searchTerm);
    res.json({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(400).json({
        message: err,
        success: false,
        error: err,
      });
    }
  }
};

// get single bicycle data
const getBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bicycleService.getBicycleFromDB(productId);
    res.json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(400).json({
        message: err,
        success: false,
        error: err,
      });
    }
  }
};

// update Single bicycle data from database
const updateBicycle = async (req: Request, res: Response) => {
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
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(400).json({
        message: err,
        success: false,
        error: err,
      });
    }
  }
};

// delete a bicycle data from database
const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await bicycleService.deleteBicycleFromDB(productId);
    res.json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(400).json({
        message: err,
        success: false,
        error: err,
      });
    }
  }
};

export default {
  createBicycle,
  getAllBicycles,
  getBicycle,
  updateBicycle,
  deleteBicycle,
};
