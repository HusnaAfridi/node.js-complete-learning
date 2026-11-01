// API (application programming interface) is used to communicate two applications.
const http = require("http");

const userData = [
    {
        name: "Husna",
        age: 19,
        location: "peshawar"
    },
    {
        name: "sara",
        age: 21,
        location: "karachi"
    },
    {
        name: "sana",
        age: 20,
        location: "lahore"
    }
];

const server = http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
});
server.listen(6100,()=>{
    console.log("server is working");
})
