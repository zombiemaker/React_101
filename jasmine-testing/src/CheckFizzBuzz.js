const checkFizzBuzz = input => {
    if (typeof(input) !== 'number'){
        throw Error ("Must be a number")
    }
    else if (input % 3 === 0 && input % 5 === 0){
        return "Fizz Buzz"
    }
    else if (input % 3 === 0){
    return "Fizz"
    }else if (input %5 === 0){
    return "Buzz"
    }else{
    return (input).toString()
}
}




// if (num % 3 == 0){
//     return "Fizz"
// }else if (num %5 == 0){
//     return "Buzz"
// }else if (num % 3 == 0 || num % 5 == 0){
//     return "Fizz Buzzzzzz"
// }else{
//     return (num).toString()
// }
