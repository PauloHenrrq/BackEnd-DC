import express from 'express';
import cors from 'cors';
import syncTableDatabase from './database/sync-table-database.js';

import User from './models/user-model.js';
import Order from './models/Order.js';
import ItensOrder from './models/Itens-orders.js';
import ProductVariation from './models/ProductVariation.js';

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
  const itensOrder = await ItensOrder.create({
    order_id: orders.id,
    product_variation: product_variation.id
  });
  const productVariation = await ProductVariation.create({
    product_id: products.id
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
