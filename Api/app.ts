import express from 'express';
import cors from 'cors';
import routes from './routes';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/img', express.static(`${__dirname}/assets`));
app.use(routes);

app.listen(PORT);
