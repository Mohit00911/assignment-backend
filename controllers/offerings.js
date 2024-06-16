const Offering = require('../models/offerings.js');

const createOffering = async (req, res) => {

    try {
      const offering = new Offering(req.body);
      await offering.save();
      res.status(201).send(offering);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
 
const getOfferings = async (req, res) => {
    try {
    
      const offerings = await Offering.find();
      console.log(offerings)
      res.json(offerings);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
  module.exports = {
    createOffering,
    getOfferings,
  };