/**
 *
 * Endpoint methods
 */
const ObjectId = require("mongoose").Types.ObjectId;
const { Question } = require("../models/Question");

// TODO: Implement secure request with token
// Get Question for id
async function getQuestion(req, res) {
  const { questionID } = req.params;
  try {
    const question = await Question.findById(questionID);
    return res.status(200).json(question);
  } catch (error) {
    return res.status(404).json(error);
  }
}

// Get Question for product id
async function getQuestionsByProduct(req, res) {
  const { productID } = req.params;

  console.log(productID);

  try {
    const questions = await Question.find({
      item_id: productID,
    });
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(404).json(error);
  }
}

// New Question
async function newQuestion(req, res) {
  const data = req.body;
  console.log(data);

  if (!data.seller) {
    return res.status(404).json("No seller");
  }

  try {
    let addQuestion = new Question(data);
    let result = await addQuestion.save();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json(error);
  }
}

// Delete Question
async function deleteQuestion(req, res) {
  const { questionID } = req.params;

  if (!ObjectId.isValid(questionID)) {
    return res.status(404).json({ error: "Not Object ID" });
  } 

  let verify = await Question.exists({
    _id: questionID,
  });

  if (!verify) {
    return res.status(404).json({ error: "Question id not exists" });
  }

  try {
    await Question.findByIdAndRemove(questionID);
    return res.status(200).json({ message: "Successfully removed" });
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  getQuestion,
  getQuestionsByProduct,
  newQuestion,
  deleteQuestion,
};
