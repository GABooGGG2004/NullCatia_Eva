const Scroll = require('../../models/scrollModel');

exports.list = async (req, res) => {
  const scrolls = await Scroll.findAll();
  res.render('scrolls/list', { scrolls });
};

exports.newForm = async (req, res) => {
  const cats = await Scroll.getCats();
  res.render('scrolls/form', { cats });
};

exports.create = async (req, res) => {
  const { title, content, cat_id } = req.body;
  await Scroll.create({ title, content, cat_id });
  res.redirect('/scrolls');
};

exports.editForm = async (req, res) => {
  const scroll = await Scroll.findById(req.params.id);
  const cats = await Scroll.getCats();
  res.render('scrolls/edit', { scroll, cats });
};

exports.update = async (req, res) => {
  const { title, content, cat_id } = req.body;
  await Scroll.update(req.params.id, { title, content, cat_id });
  res.redirect('/scrolls');
};

exports.remove = async (req, res) => {
  await Scroll.delete(req.params.id);
  res.redirect('/scrolls');
};
