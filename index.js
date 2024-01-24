import express from 'express';
const app = express();
const port = 3001; // Use a different port from your React app

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});