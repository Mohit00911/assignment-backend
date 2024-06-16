const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const cors = require('cors');
const uri = "mongodb+srv://rawat009111:X73BDC8hvOkMsTsr@assignment.s33igo5.mongodb.net/?retryWrites=true&w=majority";
const offerings=require('./controllers/offerings.js')
const cart=require('./controllers/cart.js')
const checkout=require('./controllers/checkout.js')
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect(uri, { });
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors());
app.use(bodyParser.json());
    app.post('/createOfferings', offerings.createOffering);
    app.get('/getOfferings', offerings.getOfferings);
    app.post('/addToCart',cart.addToCart);
    app.get('/getCartItems',cart.getCartItems);
    app.delete('/deleteCartItem/:id', cart.deleteCartItem);
    app.post('/checkout', checkout.checkout);

   
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});