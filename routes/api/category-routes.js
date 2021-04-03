const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll();
  return res.json(categoryData)
  // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findByPk(req.params.id)
  return res.json(categoryData);
  // be sure to include its associated Products

});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body)

  return res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      shirts: req.body.shirts,
      shorts: req.body.shorts,
      music: req.body.music,
      hats: req.body.hats,
      shoes: req.body.shoes,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  return res.json(categoryData);
});

module.exports = router;
