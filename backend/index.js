const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const router = require('./router');

app.use(express.static('public'))
app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString()});
    console.log('Recieved GET request')

});

app.use("/ritoapi", router);

app.listen(PORT, '127.0.0.1', () =>{
    console.log(`server in ${PORT}`)
})

