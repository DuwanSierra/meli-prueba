import express from 'express';
const router = express.Router();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.use(require('./application/router/router'));

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
