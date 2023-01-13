let esNumeroPrimo = (num) => {
    let count = 0
    
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            count++
        }
    }
    return  num === 2 || count < 1 && num > 2
}
for(let i = 0; i < 50; i++){
    if(esNumeroPrimo(i)){
        console.log(i);
    }
}
