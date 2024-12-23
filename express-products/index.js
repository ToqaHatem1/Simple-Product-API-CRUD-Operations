const express =require('express');
const app =express();
const port = 4000;

app.use(express.json()) //3shan y2ra el body bta3e 3la hay2et json

const productsRouter = require('./Routes/products.routes');

app.use('/api/products', productsRouter); // localhost / => /api/courses


app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
}); 