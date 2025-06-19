const Clan = require('../../models/clanModel');

// Lista de clanes
exports.list = async (req, res) => {
  const clans = await Clan.findAll();
  res.render('clans/list', { clans });
};

// Formulario nuevo
exports.newForm = async (req, res) => {
  const territories = await Clan.getTerritories();
  res.render('clans/form', { territories });
};

// Crear
exports.create = async (req, res) => {
  const { name, territory_id } = req.body;
  await Clan.create({ name, territory_id });
  res.redirect('/clanes');
};

// Formulario editar
exports.editForm = async (req, res) => {
  const clan = await Clan.findById(req.params.id);
  const territories = await Clan.getTerritories();
  res.render('clans/edit', { clan, territories });
};

// Actualizar
exports.update = async (req, res) => {
  const { name, territory_id } = req.body;
  await Clan.update(req.params.id, { name, territory_id });
  res.redirect('/clanes');
};

exports.remove = async (req, res) => {
  try {
    await Clan.delete(req.params.id);
    req.flash('success', 'Clan eliminado correctamente');
  } catch (error) {
    if (error.code === 'ER_ROW_IS_REFERENCED_2') {
      req.flash('error', 'No puedes eliminar este clan porque tiene gatitos asociados.');
    } else {
      console.error(' Error al eliminar clan:', error.message);
      req.flash('error', 'Error al eliminar el clan. Inténtalo nuevamente.');
    }
  }
  res.redirect('/clanes');
};

