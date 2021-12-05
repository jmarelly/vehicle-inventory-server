import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import api from "./routes/api";

const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTION, GET, PUT, PATCH, DELETE, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(express.json());
app.use(cors());

app.use(api);

app.use(helmet());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})