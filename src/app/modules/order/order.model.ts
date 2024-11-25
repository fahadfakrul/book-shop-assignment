import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const BookOrder = model<Order>('Order', orderSchema);
