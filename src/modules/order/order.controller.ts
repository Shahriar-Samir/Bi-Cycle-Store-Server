import { Request, Response } from 'express';
import orderService from './order.service';

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  try {
    const result = await orderService.createOrderInDB(orderData);
    res.json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      const errData = err as { status: number; message: string };
      if (errData.status === 404) {
        res.status(404).json({
          message: `Bicycle with id ${orderData.product} does not exist`,
          success: false,
          error: errData,
        });
      } else {
        res.status(400).json({
          message: `Insufficient product quantity`,
          success: false,
          error: errData,
        });
      }
    }
  }
};

const getTotalRevenue = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await orderService.calculateTotalRevenue();
    res.json({
      message: 'Revenue calculated successfully',
      status: true,
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
        message: 'Something went wrong',
        success: false,
        error: err,
      });
    }
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await orderService.getOrderFromDB(id);
    res.status(200).json({
      message: 'Order retrieved successfully',
      status: true,
      data: result,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(404).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
      });
    } else {
      res.status(404).json({
        message: 'Something went wrong',
        success: false,
        error: err,
      });
    }
  }
};

export default {
  createOrder,
  getTotalRevenue,
  getOrder,
};
