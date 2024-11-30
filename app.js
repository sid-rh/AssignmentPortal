const express = require('express');
const app=express();
const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();

const PORT=process.env.PORT|8000;

const userRoutes=require('./routes/userRoutes');
const assignmentRoutes=require('./routes/assignmentRoutes');

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(
        ()=>{
            console.log("Connected to db");
        }
    );

app.use('/api/users',userRoutes);
app.use('/api/assignments',assignmentRoutes);


app.listen(PORT,()=>
{
    console.log(`Server running on port ${PORT}`);
});