const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const RecipeRouter = require('../recipes/recipe-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());
server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    api: 'up',
  });
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'host'
    )}`
  );

  next();
}

module.exports = server;
