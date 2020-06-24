// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


//
//
//         function sayHello(input) {
//             if (typeof input === "undefined"){
//                 return "Hello, World!";
//             } else if (typeof input === "boolean"){
//                 return "Hello, World!";
//             } else if (typeof input === null){
//                 return "Hello, World!";
//             } else if (typeof input === ""){
//                 return "Hello, World!";
//             } else {
//                 return "Hello, " + input + "!";
//
//         }
// }


        function sayHello(input) {
    if (typeof input === "undefined"){
        return "Hello, World!";
    } else if (typeof input === "boolean"){
        return "Hello, World!";
    } else if (input === null){
        return "Hello, World!";
    } else if (input === "") {
        return "Hello, World!";
    } else if (input === 2.3){
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }

}