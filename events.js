var events= require("events");

var emitter= new events.EventEmitter();

emitter.on("do_call", function () {
   console.log("calling.......");
});

emitter.emit("do_call");
emitter.emit("do_call");

var fs= require("fs");
var path="./input.txt";

fs.readFile(path,"utf8", function (err,data) {
   if(err){
       console.log("emitting error event");
       emitter.emit("file_error",err);
   }
    else{
       console.log("emitting data event");
       emitter.emit("file_read",data);
   }
});

emitter.on("file_error", function (err) {
    console.log("listening error event");
    console.log(err.stack);
});

emitter.on("file_read", function (data) {
    console.log("listening data event");
    console.log(data);
});