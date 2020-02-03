const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const User = require('./models/user');
const Task = require('./models/task')
const app = express();
const port = process.dev.env.PORT;

// app.use((req, res, next) => {
//     res.status(503).send('uneder maintainence');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.get('', (req, res) => {
    res.send("working");
});




app.listen(port, () => {
    console.log('server is running on port :' + port);
});