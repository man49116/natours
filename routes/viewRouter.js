const express =  require('express');
const viewController = require('../controllers/viewController');
const { model } = require('mongoose');

const router = express.Router();


  
  
router.get('/', viewController.getOverview) 
  
  
router.get('/tour', viewController.getTour) 
  

module.exports = router
  