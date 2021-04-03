const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  const tagData = await Tag.findAll();
  return res.json(tagData)
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product}]
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  const tagData = await Tag.create(req.body)
  return res.json(tagData)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    where: {
      tag_id: req.params.id
    }
  });
});

module.exports = router;
