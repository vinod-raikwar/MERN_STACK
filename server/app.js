const express = require('express');
const app = express();
const router = require('./Routes/router');
const cors = require('cors');
const dotenv = require('dotenv');
const port = 8006;

dotenv.config();

app.use(express.json()); //frontend se data json k form m aayega.
app.use(cors()); //cross origin resource sharing frontend or backend k ports(3000 8006) diff h use error ko handle karenga ye.
app.use(router);


// app.get('/', (req, res) => {
//     res.send('Hello World! Server start');
// });


app.listen(port,()=>{
    console.log(`Server listening on port: ${port}`);
});