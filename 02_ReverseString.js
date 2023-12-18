//Given a string, return a new sting with the reversed order of characters.

//Solution-1

function reverse(str){
    let newStr = ""
    
    for(let i = str.length - 1; i>=0; i--){
        newStr = newStr + str[i]
    }
    return newStr;
}

console.log(reverse("Water"));

//Solution-2

function reverse1(str){
    let newStr = str.split("").reverse().join("");
    return newStr;
}

console.log(reverse1("Jungle"));

//Solution-3

 function rev2(str){
    let reversed = "";

    for (character of str){
        reversed = character + reversed;
    }

    return reversed;
 }

 console.log(rev2("Tree"));

 //Solution - 4

 function rev3(str) {
    // return str.split("").reduce((reversed, character) => {
    //     return character + reversed;
    // }, "")
    return str.split("").reduce((rev, char) => char + rev, "")
 }

 console.log(rev3("Monkeys"));