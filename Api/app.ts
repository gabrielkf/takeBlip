import express from 'express';
import cors from 'cors';
import { join } from 'path';
import routes from './routes';

const PORT = process.env.PORT || 8080;

const app = express();

process.env.PWD = process.cwd();
app.use(
  '/img',
  express.static(join(process.env.PWD, 'public'))
);

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT);
