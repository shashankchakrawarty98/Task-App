require('../src/db/mongoose');
const User = require('../src/models/user');

/*User.findByIdAndUpdate('5e2ed11e98d87c2924e80a7e',{age : 52}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:27})
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
});*/

const UpdateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{ age });
    const count =await User.countDocuments({ age });
    return count ;
}

UpdateAgeAndCount('5e2ed11e98d87c2924e80a7e',54).then((count)=>{
console.log(count);
}).catch((e)=>{
    console.log(e);
});