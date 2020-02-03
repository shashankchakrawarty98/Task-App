const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://shashank1998:root@cluster0-wbrol.mongodb.net/task-master-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log('conneceted');
}).catch((error)=>{
    console.log(error);
})




