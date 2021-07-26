const express = require('express');

const port = process.env.PORT || 5000;
const host = process.env.HOST || '::';

const app = express();

app.get("/",(req,res)=>{
	res.json({message:"Hello Horld"});
});

app.listen(port, host, () =>
    console.log(`\nServer runing on port ${port} at http://localhost:${port}`)
);