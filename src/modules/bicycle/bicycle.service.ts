import { TBicycle } from './bicycle.interface';
import BicycleModel from './bicycle.model';

// create Bicycle in Database
const createBicycleInDB = async (bicycle: TBicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

// get multiple Bicycle from Database
const getAllBicyclesFromDB = async (searchTerm: string) => {
  const result = await BicycleModel.find({
    isDeleted: { $ne: true },
    $or: [
      { name: new RegExp(searchTerm, 'i') },
      { brand: new RegExp(searchTerm, 'i') },
      { type: new RegExp(searchTerm, 'i') },
    ],
  }).select({
    isDeleted: 0,
    __v: 0,
  });
  return result;
};

// get single bicycle data from database
const getBicycleFromDB = async (productId: string) => {
  const result = await BicycleModel.findById(productId).select({
    isDeleted: 0,
    __v: 0,
  });
  return result;
};

// update single bicycle data
const updateBicycleFromDB = async (
  productId: string,
  updatedData: TBicycle,
) => {
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

// delete bicycle data from database
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
