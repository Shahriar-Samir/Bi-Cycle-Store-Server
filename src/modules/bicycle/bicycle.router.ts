import express from 'express';
import bicycleController from './bicycle.controller';

const bicycleRouter = express.Router();

bicycleRouter.post('/', bicycleController.createBicycle);

export default bicycleRouter;
