const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

//-------------------sync
// fs.writeFileSync("./text.txt","Hi, Kaise ho");

//-------------------async
// fs.writeFile("./test.txt","hello");

//-----------------for sync read

// const result= fs.readFileSync("./text.txt", "utf-8");
// console.log(result);

//----------------for async read

// fs.readFile("text.txt","utf-8", (err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// })

//............. blocking request

// console.log("1");

// const result = fs.readFileSync("text.txt", "utf-8");
// console.log(result);

// console.log("2");

//................non-blocking request

// console.log("1");

// fs.readFile("text.txt", "utf-8", (err,result) =>{
//     console.log(result);
// });

// console.log("2");
// console.log("3");
