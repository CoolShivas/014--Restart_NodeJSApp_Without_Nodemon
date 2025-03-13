const http = require('http');


const serving = http.createServer((request, response) => {
    if(request.url === "/")
    {
        response.setHeader("Content-Type", "text/plain");
        response.write("Hello Everyone. Hope you all are doing well.Fine")
        response.end();
    }
    if(request.url === "/home")
    {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1><center> Welcome to the Home Page. <center/><h1/>")
        response.end();
    }
    if(request.url === "/contact")
    {
        response.setHeader("Content-Type", "text/html");
        response.write("<h2><center> Welcome to the Contact Page. <center/><h2/>")
        response.write("<h3><center> Feel free to contact us. <center/><h3/>")
        response.end();
    }
    if(request.url === "/about")
        {
            response.setHeader("Content-Type", "text/html");
            response.write("<h2><center> Welcome to the About Page. <center/><h2/>")
            response.write("<p> Enjoy our website. <p/>")
            response.end();
        }
    
});


const PORT = 1915;

serving.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`);
});


// // // // Here, we are getting the Output on Terminal as :-
// // // // Listening to Port 1915
// // // // Therefore, on the Browser on url write localhost:1915  You will get hte result.
// // // // Hello Everyone. Hope you all are doing well.
// //---------------------------------------------------------------------------------------------------
// // // // So, the new url is made (i.e., "/home") and saved also. But, server is not getting it. That's means we have to run the server command again. (i.e., node porting.js).
// // // // Therefore, on the Browser on url write localhost:1915/home  You will get hte result.
// // // // Welcome to the Home Page.
// //---------------------------------------------------------------------------------------------------
// // // // So, get rid of this starting the server/port again and again. Install the nodemon.
// // // // After the installation of nodemon run the command again instead of node porting.js run nodemon porting.js
// // // // Here, we are getting the Output on Terminal as :-
// // // // [nodemon] 3.1.9
// // // // [nodemon] to restart at any time, enter `rs`
// // // // [nodemon] watching path(s): *.*
// // // // [nodemon] watching extensions: js,mjs,cjs,json
// // // // [nodemon] starting `node porting.js`
// // // // Therefore, on the Browser on url write localhost:1915/contact  You will get hte result.
// // // // Welcome to the Contact Page.
// // // // Feel free to contact us.
