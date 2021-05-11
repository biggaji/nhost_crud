import express, {Request, Response, NextFunction, Application} from 'express';
// import * as handlebars from 'express-handlebars';

const app:Application = express();
// const exphbs = handlebars();

// homepage

app.get('/', (req:Request,res:Response):void => {
    res.json({
        "message": "hello world"
    })
});

const PORT:number = 3000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});