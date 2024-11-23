import { TBicycle } from './bicycle.interface';
import BicycleModel from './bicycle.model';

const createBicycleInDB = async (bicycle: TBicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result
};

export default {
  createBicycleInDB,
};
