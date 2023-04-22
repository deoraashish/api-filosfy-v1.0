import express from 'express';
import http from 'http';
import { APP_PORT } from './config';
import router from './routes';
import './config/db';
import errorHandler from './middlewares/errorHandler';
import cors from 'cors'

const app = express();
const server = http.createServer(app);


app.use(cors({origin:["http://localhost:3000","http://3.110.197.170", "https://filosfy.com", "http://filosfy.com", "https://www.filosfy.com/"]}))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(router)


app.use(errorHandler)
server.listen(APP_PORT,() => {
    console.log(`Your server is listen on port ${APP_PORT}`)
})