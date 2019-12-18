import express from 'express';
import modulePattern from './structural-patterns/module-pattern';

const app = express();
const PORT = 3000;
const aNumber = modulePattern.subtract(12, 6);

app.get('/', (req, res) =>
    res.send(`Showing number ${aNumber}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);