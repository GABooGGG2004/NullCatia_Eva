module.exports = (err, req, res, next) => {
  console.error('🚨 Error:', err.message);
  res.status(500).render('error', {
    error: 'Ocurrió un error inesperado en el Reino NULLCATIA 😿',
    success: null
  });
};
