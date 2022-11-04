const express = require('express');
const app = express();

const port = process.env.PORT || '8080';

app.get('/', (req, res) => {
  return res.send('Hello from Openshift Local');
});

app.listen(parseInt(port, 10), ()=>console.log(`Application started on port ${port}`));

