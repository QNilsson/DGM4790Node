//Thor's Class
import express from 'express';

import {recipeRouter} from './routes/recipe.router.js';

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

mongoose.set('useFindAndModify', false);

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use (
  express.urlencoded ({
    extended: true
  })
);

app.use(express.json());

app.use(express.static ('public'));

// app.use (
// '/api',
//   apiRouter
// );
// app.use((req,res,next) =>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
//   res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization");
//   next()
// })


app.use('/recipe', recipeRouter);





app.use((req, res, next) => {
  res.status (404).send ('<h1>Page not found</h1>');
});

const main = async() => {
  await mongoose.connect(`${process.env.CONNECT_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  app.listen(port, () => {
    console.log (`Example app listening at http://localhost:${port}`);
  });
};
main();

