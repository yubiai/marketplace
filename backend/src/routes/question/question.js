const express = require("express");
const {
  getQuestion,
  newQuestion,
  getQuestionsByProduct,
  deleteQuestion,
} = require("../../controllers/question.controller");
const router = express.Router();

router.route("/:productID").get(getQuestionsByProduct);
router.route("/:questionID").delete(deleteQuestion);
router.route("/id/:questionID").get(getQuestion);
router.route("/").post(newQuestion);

module.exports = router;
