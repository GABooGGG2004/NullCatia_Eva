const Territory = require('../../models/territoryModel');

exports.list = async (req, res) => {
  const territories = await Territory.findAll();
  res.render('territories/list', { territories });
};

exports.newForm = (req, res) => {
  res.render('territories/form');
};

exports.create = async (req, res) => {
  const { name } = req.body;
  await Territory.create({ name });
  res.redirect('/territorios');
};

exports.editForm = async (req, res) => {
  const territory = await Territory.findById(req.params.id);
  res.render('territories/edit', { territory });
};

exports.update = async (req, res) => {
  const { name } = req.body;
  await Territory.update(req.params.id, { name });
  res.redirect('/territorios');
};

//exports.remove = async (req, res) => {
  //await Territory.delete(req.params.id);
  //res.redirect('/territorios');
//};

exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const count = await Territory.countClansUsingTerritory(id);

    if (count > 0) {
      // Este es el mensaje que se mostrará en la vista
      req.flash('error', 'No se puede eliminar el territorio porque tiene clanes asociados.');
      return res.redirect('/territorios');
    }

    await Territory.delete(id);
    req.flash('success', 'Territorio eliminado correctamente.');
    res.redirect('/territorios');

  } catch (err) {
    console.error('Error al eliminar territorio:', err.message);
    req.flash('error', 'No puedes eliminar este teritorio porque no esta vacio.');
    res.redirect('/territorios');
  }
};

