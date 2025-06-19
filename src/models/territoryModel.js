const pool = require('../db/connection')

module.exports = {
  findAll: async () => {
    const [rows] = await pool.query('SELECT * FROM territories');
    return rows;
  },
  findById: async (id) => {
    const [[row]] = await pool.query('SELECT * FROM territories WHERE id = ?', [id]);
    return row;
  },
  create: async ({ name }) => {
    await pool.query('INSERT INTO territories (name) VALUES (?)', [name]);
  },
  update: async (id, { name }) => {
    await pool.query('UPDATE territories SET name = ? WHERE id = ?', [name, id]);
  },
  delete: async (id) => {
    await pool.query('DELETE FROM territories WHERE id = ?', [id]);
  }
};
