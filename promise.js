let stocks = {
    Fruits : ["Strawberry", "Grapes" , " Banana", "Apple"],
    Liquid : ["Water", "Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]

}

let is_shop_open = true;

let order = (time,work) =>{
    
    return new Promise( (resolve,reject)=>{
        
        if(is_shop_open){
            setTimeout(() => {
                resolve(work() )
            },time)
        }
        else
        {
            reject(console.log("Our shop is closed"))
        }
    } )
}

order(2000,()=> console.log(`${stocks.Fruits[0]} was selected`))

    .then(() =>{
        return order(0000, ()=> console.log("Production has started"))
    })
    .then(() =>{
        return order(2000, ()=>console.log("The Fruit was chopped"))
    })
    .then(()=>{
        return order(1000,()=>{
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
        })
    })
    .then(()=>{
        return order(1000, ()=>console.log("start the machine"))
    })
    .then(()=>{
        return order(2000, ()=>{
            console.log(`ice cream placed on ${stocks.holder[0]}`)
        })
    })

    .then(()=>{
        return order(3000,()=>{
            console.log(`${stocks.toppings[0]} was selected`)
        })
    })
    .catch(() => {
        console.log("Customer left")
    })

    .finally(()=>{
        console.log("Day ended, shop is closed ")
    })