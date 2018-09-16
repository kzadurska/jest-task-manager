const express = require('express');

const port = process.env.PORT || 4000;
const app = express();

app.use('/', (req, res) => {
  res.send('It works !!!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));