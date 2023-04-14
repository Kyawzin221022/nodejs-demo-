const {readFile,writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePrommise = util.promisify(writeFile)

const start = async() =>{
    try{
        const first = await readFilePromise('./content/subfolder/first.txt','utf-8')
        const second = await readFilePromise('./content/subfolder/second.txt','utf-8')
        await writeFilePrommise('./content/subfolder/result-mind-gren.txt',`This is Awesome : ${first } and ${second}`,{flag : 'a'})
        console.log(first) 
        console.log(second)
    }
    catch(error){
        console.log(error)
    }
    finally{}

}
start()


// getText('./content/subfolder/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))
// readFile('./content/subfolder/first.txt','utf-8',(err,data)=>{
//     if(err){
//         return;
//     }
//     else {
//         console.log(data)
//     }
// })



// const getText = (path) =>{
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf-8',(err,data) =>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }
