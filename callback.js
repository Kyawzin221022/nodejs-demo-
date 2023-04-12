let stocks = {
    Fruits : ["Strawberry", "Grapes" , " Banana", "Apple"],
    Liquid : ["Water", "Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]

}


let order = (Fruit_name,call_production) =>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production()
    },2000)
}

let production = () =>{

    setTimeout(() => {
        console.log("production has started")
    },0000)
    
    setTimeout(()=>{
        console.log("The Fruit has been chopped")
        setTimeout(()=>{
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
            setTimeout(()=>{
                console.log("Machine has started")
                setTimeout(()=>{
                    console.log(`Ice cream was placed on ${stocks.holder[0]} `)
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} was added `)
                        setTimeout(()=>{
                            console.log("serve icecream")
                        },2000)
                    },3000)
                },1000)
            },1000)
        },1000)
    },2000)
}

order ( "0",production )