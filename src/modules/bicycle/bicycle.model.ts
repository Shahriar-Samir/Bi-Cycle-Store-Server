import { model, Schema } from 'mongoose';
import { TBicycle } from './bicycle.interface';

// bicycle mongoose schema
const BicycleSchema = new Schema<TBicycle>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message:
          'Given value for type is invalid. Please choose from: Mountain, Road, Hybrid, BMX, Electric.',
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, 'Quantity must be a positive number'],
    },
    inStock: {
      type: Boolean,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

BicycleSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.isDeleted;
    delete ret.__v;
    return;
  },
});

// bicycle model
const BicycleModel = model('Product', BicycleSchema);

export default BicycleModel;
