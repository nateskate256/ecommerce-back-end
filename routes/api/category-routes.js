const router = require('express').Router();
const { endsWith } = require('sequelize/types/lib/operators');
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    // be sure to include its associated Products
  const categoryData = await Category.findAll({
    include: [{ model: Product }, { model: ProductTag }]
  });
  return res.json(categoryData)
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }, { model: ProductTag }]
  });
  return res.json(categoryData);
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
  const categoryData = await Category.create(req.body)
  return res.json(categoryData);
  }
  catch (err) {
    console.log(err.message)
    res.status(400).end(err.message)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  const categoryData = await Category.update(
    {
      category_id: req.body.category_id,
      category_name: req.body.category_name,
    },
    {
      where: {
        category_id: req.params.id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      category_id: req.params.id
    }
  });

  return res.json(categoryData);
});

module.exports = router;
