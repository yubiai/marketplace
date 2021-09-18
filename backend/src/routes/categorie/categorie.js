const express = require("express");
const router = express.Router();

const categorieController = require("../../controllers/categorie.controller");

router.route("/")
    .get(categorieController.getCategorie)
    .post(categorieController.postCategorie)

router.route("/:categorieId")
    .get(categorieController.getCategorieId)

module.exports = router;
