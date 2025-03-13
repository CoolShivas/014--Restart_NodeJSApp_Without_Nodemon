const http = require('http');


const serving = http.createServer((request, response) => {
    if(request.url === "/")
    {
        response.setHeader("Content-Type", "text/plain");
        response.write("Hello Everyone. Hope you all are doing well.")
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