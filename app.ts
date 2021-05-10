import express from 'express';
import * as handlebars from 'express-handlebars';

const app = express();
const exphbs = handlebars();

// homepage

app.get('/', (req,res) => {
    res.json({
        "message": "hello world"
    })
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
    `server running on ${PORT}`;
});