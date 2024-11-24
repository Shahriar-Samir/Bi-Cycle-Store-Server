import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';
import validator from 'validator';

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return validator.isEmail(value);
        },
        message: "Invalid email! '{VALUE}' is not a valid email",
      },
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  },
);

OrderSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.isDeleted;
    delete ret.__v;
    return;
  },
});

const OrderModel = model('Order', OrderSchema);

export default OrderModel;
