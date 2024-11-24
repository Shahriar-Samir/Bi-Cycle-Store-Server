import OrderModel from './order.model';
import { TOrder } from './order.interface';
import BicycleModel from '../bicycle/bicycle.model';

// create order document in database

const createOrderInDB = async (orderData: TOrder) => {
  const { product: productId, quantity: orderedQuantity } = orderData;
  const options = { upsert: false, runValidators: true };

  const getProductQuantity = await BicycleModel.findOne({
    _id: productId,
    isDeleted: false,
  }).select({
    quantity: 1,
  });

  if (getProductQuantity) {
    const { quantity: productQuantity } = getProductQuantity as {
      quantity: number;
    };
    if (productQuantity >= orderedQuantity) {
      await BicycleModel.updateOne(
        { _id: productId },
        [
          {
            $set: {
              quantity: { $subtract: ['$quantity', orderedQuantity] },
            },
          },
          {
            $set: {
              inStock: {
                $cond: {
                  if: { $eq: ['$quantity', 0] },
                  then: false,
                  else: '$inStock',
                },
              },
            },
          },
        ],
        options,
      );
      const result = await OrderModel.create(orderData);
      return result;
    } else {
      throw {
        message: 'Insufficient product quantity',
        status: 400,
      };
    }
  } else {
    throw {
      message: `Bicycle with id ${productId} does not exist`,
      status: 404,
    };
  }
};

// calculate total revenue of all orders

const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: '1',
        totalRevenue: { $sum: { $multiply: ['$totalPrice', '$quantity'] } },
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  return result[0];
};

// get order data from database

const getOrderFromDB = async (orderId: string) => {
  const result = await OrderModel.findOne({ _id: orderId });
  if (result === null) {
    throw {
      message: `Order with id ${orderId} not found`,
    };
  }
  return result;
};

export default {
  createOrderInDB,
  calculateTotalRevenue,
  getOrderFromDB,
};
