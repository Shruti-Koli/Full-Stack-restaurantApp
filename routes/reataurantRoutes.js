const express = require('express');
const restC = require('../contrllers/restCont');

const router = express.Router();

router.get('/get-orders',restC.getOrders);
router.post('/post-order',restC.postOrder);
router.post('/delete-orders/:id',restC.deleteOrder);

module.exports = router;