const pool = require('../db/connection');

const Scroll = {
  findAll: async () => {
    const [rows] = await pool.query(`
      SELECT scrolls.*, cats.name AS cat_name
      FROM scrolls
      JOIN cats ON scrolls.cat_id = cats.id
    `);
    return rows;
  },

  findById: async (id) => {
    const [[row]] = await pool.query('SELECT * FROM scrolls WHERE id = ?', [id]);
    return row;
  },

  create: async ({ title, content, cat_id }) => {
    await pool.query('INSERT INTO scrolls (title, content, cat_id) VALUES (?, ?, ?)', [title, content, cat_id]);
  },

  update: async (id, { title, content, cat_id }) => {
    await pool.query('UPDATE scrolls SET title = ?, content = ?, cat_id = ? WHERE id = ?', [title, content, cat_id, id]);
  },

  delete: async (id) => {
    await pool.query('DELETE FROM scrolls WHERE id = ?', [id]);
  },

  getCats: async () => {
    const [rows] = await pool.query('SELECT * FROM cats');
    return rows;
  }
};

module.exports = Scroll;
