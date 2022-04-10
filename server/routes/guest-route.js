const guestRouter = require('express').Router();
const { AddGuest,UpdateGuest ,GetGuests} = require("../controllers/Guest-controller");

guestRouter.get("/",GetGuests)
guestRouter.post("/",AddGuest)
guestRouter.put('/:phone', UpdateGuest)



module.exports = guestRouter;