const { Categorie } = require('../models/Categories')

async function getCategorie(req, res) {
  try {
    const categories = await Categorie.find({})

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

async function postCategorie(req, res) {
  try {
    const item = new Categorie({
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

async function getCategorieId(req, res) {
  try {
    res.status(200).json({
      status: 'ok',
    })
  } catch (error) {
    res.status(400).json({
      message: 'Ups Hubo un error!',
      error: error,
    })
  }
}

module.exports = {
  getCategorie,
  postCategorie,
  getCategorieId,
}
