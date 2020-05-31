require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('5ed3c6cd9309191dc8b8adfd').then((task)=>{
// console.log(task)
// return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })

const updatecount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age}) 
    return count
}

updatecount('5ed3a8fd63c5c422806ec70b',2).then((count)=>
{
    console.log(count)
}).catch((e)=>{
console.log(e)})