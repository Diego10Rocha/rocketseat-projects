const express = require('express');

const {errors} = require('celebrate')

const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;






/**
 * GET: Buscar informações do backend
 * POST: Criar informações no backend
 * PUT: Alterar informações no backend
 * DELETE: Deletar informações no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou atualizar recursos
 */

 /**
  * SQL: MySQL, SQLite, PorstregreSQL
  * NOSQL: MongoDB, Firebase etc.
  */

  /**
   * Driver: Select * from users
   * Query Builder: table('users').select('*').where('name=Diego')
   */
