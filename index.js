import express from 'express';
import users from './mock/users';

const app = express();
const port = 3001;

app.get('/heartbeat', (req, res) => res.send({ dateTime: new Date().toJSON() }));

// Here is the first operation, the ability to read the list of users:

app.listen(port, () => console.log(`Example app listening on port ${port}`));