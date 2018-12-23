/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
import { User } from '@sport/activities';

const app = express();

const user: User = {
  id: 1,
  firstname: 'Quentin',
  lastname: 'Monmert',
  city: 'Paris',
  country: 'France'
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.json(user);
});

const port = 3333;
app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
