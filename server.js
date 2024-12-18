const express = require('express')
const app = express();
app.use(express.json());

let task = []

app.get('/',(reg,res)=> {
    res.send({tasks});
})

app.post('/add-task', (req, res) =>{
    const newTAsk = req.body.task;
    if(Newtask){
        task.push(Newtask);
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('serveur lancé');
})