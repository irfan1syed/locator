var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlLocations=require('../controller/locations');
var ctrlOthers=require('../controller/others');
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);
router.get('/about',ctrlOthers.about);
module.exports = router;
