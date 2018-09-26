var io = require('socket.io')(8002) //lang nghe cong 8002
console.log('connected to port 8002');
io.on('error',function(socket){
    console.log('error');
})
io.on('connection',function(socket){
    console.log('co nguoi vua ket noi'+socket.id);
})
io.on('newMess',function(data){
    console.log(data);
})
//redis
var Redis = require('ioredis')
var redis = new Redis(8001);
	redis.psubscribe("*",function(error,count){
});
redis.on('pmessage',function(partner,channel,message){
	console.log(channel);
	console.log(message);
	// console.log(partner);

	message = JSON.parse(message);
	io.emit(channel+":"+message.event,message.data);
	console.log("sent");
});