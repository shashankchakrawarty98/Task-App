//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient

const {MongoClient,ObjectID} = require('mongodb')

const databaseName = 'task-master'
const uri ='mongodb+srv://shashank1998:root@cluster0-wbrol.mongodb.net/test?retryWrites=true&w=majority'
//const ObjectID = mongodb.ObjectID

/*const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp) 
console.log(id.id.length)
console.log(id.toHexString().length)*/

const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true});
client.connect().then(() => {
   
    console.log('connected')
   
    const db = client.db(databaseName)
 //Inserting into documents
    
  /*  db.collection('users').insertOne({
        _id: id ,
        name : 'shashank',
        age:'21'
    },(error,result )=>{
        if(error){
            return console.log("unble to insert")
        }

        console.log(result.ops)

    }
    
    );*/

   /* db.collection('users').insertMany([{
        name:'dhoni',
        age:'41'
    },{
        name:'kohli'
        ,age:'30'
    }],(error,result)=>{
        if (error){
            console.log('unable to insert')
        }
        console.log(result.ops)       
        console.log(result.insertedCount)  
    }
     
    
    );*/
   /* db.collection('tasks').insertMany([{
        description:'clean the house',
        completed:true
    },
    {
        description:'renew inspection',
        completed:false
    },
    {
        description:'pot plants ',
        completed:false
    }],(error,result)=>{
            if(error){
                console.log('unable to insert')
            }
            console.log(result.ops)
            console.log(result.insertedCount)
    })*/


    //querying or fetching documents through ID

   /* db.collection('users').find( { age: '41' } ).toArray((error,users)=>{
        console.log(users);
    })
    db.collection('users').find({age:'41'}).count((error,count)=>{
        console.log(count);
    })*/

   /*  db.collection('users').updateOne({
        _id : new ObjectID("5e2e9876f34bab1b708d486e")
    },
    {
        $set:{
            name:'Cheteshwar Pujara'
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })*/

    /*db.collection('users').deleteMany({
        age:'30'
    }).then((result)=>{
            console.log(result)
    }).catch((error)=>{
            console.log(error)
    })*/

}).catch((err) => {
    console.log(">>>>>>>>>>>>>>>>> Error", err);
});
