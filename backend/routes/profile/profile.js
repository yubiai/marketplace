const express = require("express");
const router = express.Router();

const profileController = require("../../controllers/profile.controller");

router.route("/:walletAddress")
    .get(profileController.getProfile);

router.route("/login")
    .post(profileController.login);

module.exports = router;
