import express from 'express';
import orderController from './order.controller';

const orderRouter = express.Router();

orderRouter.post('/', orderController.createOrder);
orderRouter.get('/revenue', orderController.getTotalRevenue);
orderRouter.get('/:id', orderController.getOrder);

export default orderRouter;
