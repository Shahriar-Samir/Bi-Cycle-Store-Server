import express from 'express';
import bicycleController from './bicycle.controller';

const bicycleRouter = express.Router();

bicycleRouter.post('/', bicycleController.createBicycle);
bicycleRouter.get('/', bicycleController.getAllBicycles);
bicycleRouter.get('/:productId', bicycleController.getBicycle);
bicycleRouter.put('/:productId', bicycleController.updateBicycle);
bicycleRouter.delete('/:productId', bicycleController.deleteBicycle);

export default bicycleRouter;
