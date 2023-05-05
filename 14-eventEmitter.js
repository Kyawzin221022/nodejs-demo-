const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log("data received ")
})


customEmitter.emit('response')

customEmitter.on('response',()=>{
    console.log("some other logic here  ")
})

customEmitter.emit('response')