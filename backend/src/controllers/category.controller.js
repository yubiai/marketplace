const { Category } = require('../models/Category');
const { Item }=require('../models/Item');

async function getCategory(req, res) {
  try {
    const categories = await Category.find({}).populate('items')

    res.status(200).json({
      status: 'ok',
      result: categories,
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ups Hubo un error!',
      error: error,
    })
  }
}

async function postCategory(req, res) {
  try {
    const categoryId = req.body.categoryId;

    let verifyId = await Category.exists({
      categoryId
    });
  
    if (verifyId) {
      return res.status(404).json({ error: "Category Id exists" });
    }

    const item = new Category({
      categoryId: categoryId,
      title: req.body.title,  
      description: req.body.description,
      permalink: req.body.permalink,
    })

    await item.save()

    res.status(200).json({
      message: 'Categoria agregado con éxito!',
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Ups Hubo un error!',
      error: error,
    })
  }
}

async function getCategoryId(req, res) {
  try {
    const categories = await Category.find({categoryId: req.params.id}).populate("items")
    res.status(200).json({
      status: 'ok',
      response: categories
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ups Hubo un error!',
      error: error,
    })
  }
}

module.exports = {
  getCategory,
  postCategory,
  getCategoryId,
}
