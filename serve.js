const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

/**
アクセス時
**/
app.get("/",(req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket)=>{
  console.log("接続しました");
  socket.on("post",(msg)=>{
    io.emit("member-post",msg);
  });
});
//DB
var config = {
        "user": "myusername", //default is sa
        "password": "yourStrong(!)Password",
        "server": "localhost", // for local machine
        "database": "staging", // name of database
        "options": {
            "encrypt": true
        }
      }

sql.connect(config, err => {
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query('select 1 as number', (err, result) => {

        console.dir(result)

    })

});

sql.on('error', err => {

    console.log("Sql database connection error " ,err);
})

http.listen(3000,()=>{
  console.log("listening on *:3000");
});
