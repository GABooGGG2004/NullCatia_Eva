const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const { port } = require('./config/config');
const catRoutes = require('./routes/cat.routes');
const clanRoutes = require('./routes/clan.routes');
const scrollRoutes = require('./routes/scroll.routes');
const territoryRoutes = require('./routes/territory.routes');
const indexRoutes = require('./routes/index.routes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const app = express();

// Configuración básica
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secretoNULLCATIA',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// Variables globales para mensajes flash
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Rutas
app.use('/', indexRoutes);
app.use('/gatitos', catRoutes);
app.use('/clanes', clanRoutes);
app.use('/scrolls', scrollRoutes);
app.use('/territorios', territoryRoutes);


// Middleware de error
app.use(errorMiddleware);

// Servidor
app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}`);
});
