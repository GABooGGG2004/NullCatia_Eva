const mysql = require('mysql2/promise');
const { db } = require('../config/config');

const pool = mysql.createPool({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Conexión a la base de datos establecida correctamente');
    connection.release(); // libera la conexión al pool
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err.message);
  });


module.exports = pool;