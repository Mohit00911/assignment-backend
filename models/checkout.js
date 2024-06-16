const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
 
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PurchasedItem',
    required: true,
  }],
  total: {
    type: Number,
    // required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Checkout = mongoose.model('checkout', CheckoutSchema);

module.exports = Checkout;