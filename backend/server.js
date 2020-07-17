import express from 'express';
import data from './data/data';

const app = express();
const port = 5000;

app.get('/api/clients', (req, res) => {
    res.send(data.client)
})

app.listen(port, () => {console.log('Server running on port ' + port)})