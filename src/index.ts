import express from 'express';

const app = express();
import adminRoutes from './routes/adminRoutes';

app.use(express.json());
app.use(express.urlencoded({'extended':false}))
app.use(adminRoutes);


app.listen(3000,()=>{
    console.log('Server running on port ',3000);
})

