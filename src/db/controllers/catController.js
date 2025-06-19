const { Cat, Clan } = require('../../models/catModel');

// Listar gatos
exports.listCats = async (req, res) => {
  const cats = await Cat.getAll();
  res.render('cats/list', { cats });
};

// Formulario de nuevo gato
exports.newCatForm = async (req, res) => {
  const clans = await Clan.getAll();
  res.render('cats/form', { clans });
};

// Crear gato
exports.createCat = async (req, res) => {
  const { name, age, clan_id } = req.body;
  await Cat.create({ name, age, clan_id });
  res.redirect('/gatitos');
};

// Formulario de edición
exports.editCatForm = async (req, res) => {
  const { id } = req.params;
  const cat = await Cat.getById(id);
  const clans = await Clan.getAll();
  res.render('cats/edit', { cat, clans });
};

// Actualizar gato
exports.updateCat = async (req, res) => {
  const { id } = req.params;
  const { name, age, clan_id } = req.body;
  await Cat.update(id, { name, age, clan_id });
  res.redirect('/gatitos');
};

// Eliminar gato
exports.deleteCat = async (req, res) => {
  const { id } = req.params;
  await Cat.delete(id);
  res.redirect('/gatitos');
};