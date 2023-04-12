let stocks = {
    Fruits : ["Strawberry", "Grapes" , " Banana", "Apple"],
    Liquid : ["Water", "Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]

}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}
async function kitchen() {
    try{
        await time(3000)
        console.log(`${stocks.Fruits[0]}`)

        await time(00000)
        console.log("start the production")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
    
        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`Ice cream placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was sselected`)
    
        await time(2000)
        console.log("Serve ice cream")
    }

    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended , shop is closed")
    }
}

kitchen()