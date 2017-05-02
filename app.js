const express = require('express');
const app = express();

//配置路由规则
app.get('/',(req,res)=>{
	res.send('hello');
});





//监听端口
app.listen(3000,()=>{
	console.log('服务器运行在3000端口...');
})
