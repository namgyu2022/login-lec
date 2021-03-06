"use strict"
// 1st code
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("여기는 루트 입니다.");
// });

// app.get("/login", (req,res) => {
//     res.send("여기는 로그인 화면입니다.");
// });

// app.listen(3000, function() {
//     console.log("서버 가동");
// });



// 2nd code
// const http = require("http");
// const app = http.createServer((req, res)=> {
//     console.log(req.url);
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

// 3rd code
// const http = require("http");
// const app = http.createServer((req, res)=> {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     if (req.url ==="/") {
//         res.end("여기는 루트 입니다.");
//     } else if(req.url ==="/login") {
//         res.end("여기는 로그인 화면입니다.");
//     };
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

// 4th code
// const express = require("express");
// const app = express();
// // 앱 세팅
// app.set("views", "./views");
// app.set("view engine", "ejs");
 
// app.get("/", (req, res) => {
//     res.render("home/index");
// });
 
// app.get("/login", (req,res) => {
//     res.render("home/login");
// });
 
// app.listen(3000, function() {
//     console.log("서버 가동");
// });

// 5th code
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");
app.use("/", home); // use -> 미들웨어를 등록해 주는 메서드

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;
