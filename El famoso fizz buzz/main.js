function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if (div3(i) && div5(i)) {
            console.log('fizzbuzz');
        }else if(div5(i)){
            console.log('buzz');
        }else if(div3(i)){
            console.log('fizz');
        }else{
            console.log(i);
        }

    }
}

function div3(num){
    return num % 3 === 0
}

function div5(num){
    return num % 5 === 0
}

fizzBuzz()