import { model, Schema } from 'mongoose';
import { TBicycle } from './Bicycle.interface';

const BicycleSchema = new Schema<TBicycle>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    required: true,
  },
});

const BicycleModel = model('Product', BicycleSchema);

export default BicycleModel;
