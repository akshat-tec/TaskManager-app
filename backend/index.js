const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello from the server');
});
const cors = require('cors');
app.use(cors({ origin: 'https://task-manager-app-ui.vercel.app' }));

app.use(bodyParser.json());
app.use('/tasks', TaskRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
}) 
