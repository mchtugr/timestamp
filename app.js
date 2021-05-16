const express = require('express');

const timestamp = require('./routes/api/timestamp');

const app = express();


app.get('/', (req, res) => {
    res.send('Hi')
})

// Use routes
app.use('/api/timestamp', timestamp);
app.use('/api', timestamp);

const port = process.env.PORT || 3000
app.listen(port, () =>{
    console.log(`Server started on port: ${port}`);
});