let stocks= {
    fruits : ['strawberry','grapes','banana','apple'],
    liquids : ['water','ice'],
    holder : ['cone','cup','stick'],
    toppings : ['chocolate','peanuts']
}


// console.log(stocks.fruits[2]);


let order=(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected` )
    },2000)
    call_production()
};
let production=()=>{
    setTimeout
    console.log('order receive in production')
};

order(0,production)



