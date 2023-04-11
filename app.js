const {readFile , writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


const start = async() => {
    try{
        const first =await getText('./content/subfolder/first.txt','utf-8')
        const second =await getText('./content/subfolder/second.txt','utf-8')
        await writeFilePromise('./content/subfolder/result-mind-grenade.txt',`This is awesome ${first} ${second}`,{flag :'a'})
        console.log(first)
        console.log(second)

    }catch(error) {
        console.log(error)
    }
}

start()

