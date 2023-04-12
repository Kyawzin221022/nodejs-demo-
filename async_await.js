let stocks = {
    Fruits : ["Strawberry", "Grapes" , " Banana", "Apple"],
    Liquid : ["Water", "Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]

}

let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve,reject) =>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

async function order() {
    try{
        await abc;
    }
    catch(error){
        console.log("abc doesn't exits",error)
    }
    finally{
        console.log("Runs code anyways")
    }
}

order()
.then(()=> {
    console.log("akjdklajfldk")
})