import axios from 'axios';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_API_URL || 'http://localhost:4000');

export const questionService = {
  newQuestion,
  getQuestion,
  deleteQuestion,
  getQuestionsByProduct,
  addAnswerByIdQuestion
};


async function newQuestion(payload = {}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/questions/`,
    { ...payload }
  );
}

async function getQuestion(questionId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/questions/${questionId}`);
}

async function deleteQuestion(questionId) {
  return await axios.delete(
    `${SERVER_ENDPOINT}/api/questions/${questionId}`);
}

async function getQuestionsByProduct(productId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/questions/product/${productId}`);
}

async function addAnswerByIdQuestion(questionId, payload={}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/questions/answer/${questionId}`,
    { ...payload }
  );
}
