import express from 'express';
import cors from 'cors';
import syncTableDatabase from './database/sync-table-database.js';

import User from './models/UserModel.js';
import Order from './models/Order.js';
import ItensOrder from './models/ItensOrders.js';
import ProductVariation from './models/ProductVariation.js';
import Products from './models/Products.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/', async (request, response) => {
  const { name, birthdate } = request.body;
  const users = await User.create({
    name,
    birthdate
  });
  const order = await Order.create({
    user_id: users.id
  });
  return response.status(200).json('Dados salvos com sucesso');
});

app.get('/', async (request, response) => {
  const user = request.body;
  // const users = await User.sync();
  return response.status(200).json(`Os dados a serem salvos são ${user}`);
});

const initServer = async () => {
  await syncTableDatabase();
  app.listen(port, error => {
    console.log('App is running')
  });
};

initServer();
