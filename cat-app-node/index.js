var express = require('express');

var catRouter = require('./routes/cats');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/cat', catRouter);

app.listen(process.env.PORT || 3001, () => {
    console.log('connected')
})
