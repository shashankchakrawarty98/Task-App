require ('../src/db/mongoose');
const Task = require('../src/models/task');

/*Task.findByIdAndRemove('5e2ec238520bb448608b79e7').then((task)=>{
    console.log(task);
    return Task.countDocuments({completed:false});
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})*/

const DeleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndRemove(id);
    const count = await Task.countDocuments({completed:false});
    return count;
}

DeleteTaskAndCount('5e2ed327bfd7c53f089caf36').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
