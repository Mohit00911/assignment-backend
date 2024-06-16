const Checkout = require('../models/checkout.js');

const checkout = async (req, res) => {
    const { items, total } = req.body;
  
    try {
      console.log(total)
      const purchasedItems = await Checkout.insertMany(items);
  
      
      const checkout = new Checkout({
        items: purchasedItems.map(item => item._id),
        total,
       
      });
  
      await checkout.save();
      
      res.json(checkout);
    } catch (error) {
      res.status(500).json({ message: 'Failed to complete checkout' });
      console.log(error)
    }
  }
  module.exports = {
    checkout
  };
  