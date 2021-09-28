const express = require("express");
const router = express.Router();

const categoryController = require("../../controllers/category.controller");

router.route("/")
    .get(categoryController.getCategory)
    .post(categoryController.postCategory)

router.route("/:id")
    .get(categoryController.getCategoryId)

module.exports = router;
