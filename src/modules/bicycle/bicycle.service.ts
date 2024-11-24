import { TBicycle } from './bicycle.interface';
import BicycleModel from './bicycle.model';

const createBicycleInDB = async (bicycle: TBicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBicyclesFromDB = async (searchTerm: string) => {
  const result = await BicycleModel.find({ isDeleted: { $ne: true } }).select({
    isDeleted: 0,
    __v: 0,
  });
  return result;
};

const getBicycleFromDB = async (productId: string) => {
  const result = await BicycleModel.findById(productId).select({
    isDeleted: 0,
    __v: 0,
  });
  return result;
};

const updateBicycleFromDB = async (
  productId: string,
  updatedData: TBicycle,
) => {
  console.log('update');
  const options = { upsert: false, new: true };
  const result = await BicycleModel.findByIdAndUpdate(
    productId,
    updatedData,
    options,
  ).select({
    isDeleted: 0,
    __v: 0,
  });
  return result;
};

const deleteBicycleFromDB = async (productId: string) => {
  const deleteStatus = await BicycleModel.updateOne(
    { _id: productId },
    {
      isDeleted: true,
    },
  );
  if (deleteStatus.modifiedCount) {
    return {};
  } else {
    return deleteStatus;
  }
};

export default {
  createBicycleInDB,
  getAllBicyclesFromDB,
  getBicycleFromDB,
  updateBicycleFromDB,
  deleteBicycleFromDB,
};
