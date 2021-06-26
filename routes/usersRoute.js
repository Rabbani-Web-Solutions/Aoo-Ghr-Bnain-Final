const express = require('express')
router = express.Router();
usersRoute = require("../controller/usersControllers")

router.get("/",usersRoute.userController);

module.exports = router;
