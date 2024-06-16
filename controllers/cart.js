const Cart = require('../models/cart');

const addToCart = async (req, res) => {
  const { title, description, price, _id } = req.body;
  try {
    const cartItem = new Cart({
      title,
      description,
      price,
      _id
    });
    await cartItem.save();
    res.status(201).send(cartItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
const getCartItems = async (req, res) => {
    try {
      const cartItems = await Cart.find();
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    try {
        const cartItem = await Cart.findByIdAndDelete(id);
        if (!cartItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
module.exports = {
  addToCart,
  getCartItems,
  deleteCartItem
};
