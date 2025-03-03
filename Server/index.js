const http= require("http");  //module
const fs= require("fs");
const url = require("url");



// ...............creating server

// const myServer= http.createServer((req, res) =>{
//     if(req.url==="/favicon.ico") return res.end();
//     const log = `${Date.now()}: ${req.url} New Req Recived\n`;
//     const myUrl= url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err,data)=>{
//         // res.end("Hello From Server");  
//         switch(myUrl.pathname){
//             case "/":
//                 res.end("HomePage");
//                 break;
//             case "/about":
//                 const username= myUrl.query.myname;
//                 res.end(`Hi, ${username}`);
//                 break;
//             case "/search":
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your results for "+ search);
//                 break;
//             default:
//                 res.end("404 Not Found");
//         }

//     });

//     // console.log("New Req Rec.");  
// });


// ...........Http Methods

 const myServer=http.createServer((req, res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recived\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username= myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query; 
                res.end("Here are your results for "+ search);
                break;
            default:
                res.end("404 Not found");
        }
    });
 });

myServer.listen(8001, () => console.log("Server Started"));

