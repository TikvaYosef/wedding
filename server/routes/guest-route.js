const guestRouter = require('express').Router();
// const guestCtrl = require("../controllers/Guest-controller")
const { AddGuest,UpdateGuest ,GetGuests} = require("../controllers/Guest-controller");

guestRouter.get("/",GetGuests)
guestRouter.post("/",AddGuest)
guestRouter.put('/:phone', UpdateGuest)



module.exports = guestRouter;