import * as dotenv from 'dotenv';
import express, {Request, Response, NextFunction, Application, Router} from 'express';
import exphbs from 'express-handlebars';
import router  from './src/routers/index';
import path from 'path';
import * as bodyparser from 'body-parser';

dotenv.config();

const app:Application = express();

const indexRoute:Router = router;

app.use(bodyparser.urlencoded({ extended : false }));
app.use(bodyparser.json());

// setup static file handler

app.use(express.static(path.join(__dirname, "public")));

// setup template engine
app.engine('hbs', exphbs({defaultLayout: "main", extname: "hbs"}));
app.set('view engine', 'hbs');


app.use('/', indexRoute);

// setup 404 page handler
app.use((req:Request, res:Response, next:NextFunction) => {
    res.render("404", {pageTitle: "Page Not Found"});
});

const ENVPORT = process.env.PORT
const PORT: (string|number) =  ENVPORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

export default app;