const pool = require('../db/connection');

// Modelo para operaciones con gatos
const Cat = {
  // Listar todos los gatos con información de clan
  getAll: async () => {
    const [rows] = await pool.query(`
      SELECT cats.*, clans.name AS clan_name 
      FROM cats
      JOIN clans ON cats.clan_id = clans.id
    `);
    return rows;
  },

  // Obtener un gato por ID
  getById: async (id) => {
    const [[cat]] = await pool.query('SELECT * FROM cats WHERE id = ?', [id]);
    return cat;
  },

  // Crear un nuevo gato
  create: async ({ name, age, clan_id }) => {
    await pool.query('INSERT INTO cats (name, age, clan_id) VALUES (?, ?, ?)', [name, age, clan_id]);
  },

  // Actualizar un gato
  update: async (id, { name, age, clan_id }) => {
    await pool.query('UPDATE cats SET name = ?, age = ?, clan_id = ? WHERE id = ?', [name, age, clan_id, id]);
  },

  // Eliminar un gato
  delete: async (id) => {
    await pool.query('DELETE FROM cats WHERE id = ?', [id]);
  }
};

// Modelo para operaciones con clanes (necesario para los formularios)
const Clan = {
  getAll: async () => {
    const [clans] = await pool.query('SELECT * FROM clans');
    return clans;
  }
};

module.exports = { Cat, Clan };