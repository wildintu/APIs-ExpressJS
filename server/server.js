const express = require ('express');
const cors = require ('cors');
const apiRouter = require('./routes');
const path = require('path');

let app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', apiRouter);

// app.listen(3000);
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))