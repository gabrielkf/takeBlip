import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`*** Listening on port ${PORT} ***`);
});
