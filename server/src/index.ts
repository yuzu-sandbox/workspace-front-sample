import express from 'express';
import path from 'path';

const app = express();

const clientBuildPath = path.resolve(__dirname, '../../client/dist/');

app.use(express.static(clientBuildPath));

app.get('/api', (_, res) => {
  res.json({ message: 'api handler' });
});

app.get('*', (_, res) => {
  res.send('any match handle');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
