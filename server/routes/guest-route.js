const guestRouter = require('express').Router();
const guestCtrl = require("../controllers/Guest-controller")


guestRouter.put('/:phone', guestCtrl.UpdateCity)


module.exports = guestRouter;