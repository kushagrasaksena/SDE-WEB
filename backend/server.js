import express from 'express'
import problems from './routes/problems.js'

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Api is running');
})

app.use('/api/problems', problems)

app.listen(5000,console.log("Running at port 5000"));