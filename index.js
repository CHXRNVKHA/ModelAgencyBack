const express = require('express');
const router = require('./routers/export-router');
const path = require('path');
const cors = require('cors');

const app = express();
const hostname = 'localhost';
const port = 3030;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-type, Authorization, Origin, X-Requested-With, Accept',
}));

app.use(express.json());

app.use('/api/user', router.userRouter);
app.use('/api/model', router.modelRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});