import express from 'express';
import api from '../controller/api';

let router = express.Router()

router.route('/bankDetails').get(api.bankDetails);
router.route('/priceDetails').get(api.priceDetails);
router.route('/marketDetails').get(api.marketDetails);
router.route('/messageDetails').get(api.messageDetails);
router.route('/contactDetails').get(api.contactDetails);

router.route('/bankNewDetails').post(api.bankNewDetails);
router.route('/priceNewDetails').post(api.priceNewDetails);
router.route('/marketNewDetails').post(api.marketNewDetails);
router.route('/messageNewDetails').post(api.messageNewDetails);
router.route('/contactNewDetails').post(api.contactNewDetails);



module.exports=router;