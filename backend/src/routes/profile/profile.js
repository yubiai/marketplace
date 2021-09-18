const express = require("express");
const router = express.Router();

const profileController = require("../../controllers/profile.controller");
const upload = require("../../middlewares/upload");

router.route("/:walletAddress")
    .get(profileController.getProfile, upload);

router.route("/login")
    .post(profileController.login);

module.exports = router;
