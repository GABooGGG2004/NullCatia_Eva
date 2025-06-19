const pool = require('../db/connection');

const Clan = {
  findAll: async () => {
    const [rows] = await pool.query(`
      SELECT clans.*, territories.name AS territory_name 
      FROM clans
      JOIN territories ON clans.territory_id = territories.id
    `);
    return rows;
  },

  findById: async (id) => {
    const [[row]] = await pool.query('SELECT * FROM clans WHERE id = ?', [id]);
    return row;
  },

  create: async ({ name, territory_id }) => {
    await pool.query('INSERT INTO clans (name, territory_id) VALUES (?, ?)', [name, territory_id]);
  },

  update: async (id, { name, territory_id }) => {
    await pool.query('UPDATE clans SET name = ?, territory_id = ? WHERE id = ?', [name, territory_id, id]);
  },

  delete: async (id) => {
    try {
      await pool.query('DELETE FROM clans WHERE id = ?', [id]);
    } catch (error) {
      throw error;
    }
  },

  getTerritories: async () => {
    const [rows] = await pool.query('SELECT * FROM territories');
    return rows;
  }
};

module.exports = Clan;
