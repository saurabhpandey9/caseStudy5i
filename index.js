const express = require('express');
const app = express()


app.post('/',(req,res)=>{

	res.send("hello world");
});


app.get('/put',(req,res)=>{

	return res.send("hello swagger output");
});


app.get('/put/getUserdetails',(req,res)=>{

	return res.send("hello swagger output");
});


app.listen(4400,(result)=>{
console.log("Server running on port: 4440);
});


//simple nodejs server with express
