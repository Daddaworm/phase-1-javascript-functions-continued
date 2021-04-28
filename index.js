// Your code here

function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(char='*'){ // implement a fuction called wrapAdjective
    return function(msg=`special`){
        return `You are ${char}${msg}${char}!` //should return 'You are *a hard worker*!'
    }
}
