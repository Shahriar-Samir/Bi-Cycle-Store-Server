import { ObjectId } from 'mongoose';

// order type
export type TOrder = {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
