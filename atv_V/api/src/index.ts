import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';
import { AppDataSource } from './database/database';


dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/', router)

AppDataSource.initialize().then(() => {

    console.log('Database connected')
    app.listen(port, () => {

        try{
            console.log(`Server is running on port ${port}`)
    
        }catch(error){
            console.log(error)
        }
    
    
    })
}).catch((error) => {
    console.log(error)
})







