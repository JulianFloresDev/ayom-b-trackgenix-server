import express from 'express';
import router from './routes';

const app = express();
app.use(express.json());
app.use('/api', router);

app.get('/', async (req, res) => {
  res.send('Hello Worlddd!');
});

export default app;
