const express = require("express");
const router = express.Router();

const profileController = require("../../controllers/profile.controller");
const upload = require("../../middlewares/upload");

router.route("/:walletAddress").get(profileController.getProfile, upload);

router.route("/login").post(profileController.login);

router.route("/:userID").put(profileController.updateProfile);

router.route("/:userID").delete(profileController.deleteProfile);

router.route("/favorite/:userID").put(profileController.favoriteProfile);

module.exports = router;
