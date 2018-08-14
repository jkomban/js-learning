var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('Completing task:'+this.name)
    this.completed=true;
}

Task.prototype.save = function(){
    console.log('Saving task:'+this.name)
}

var myTask = new Task('Legacy Task')
console.log("LEGACT TASK",typeof myTask)


//  Until the above line , its a plain javascript

var UrgentTask = function(name, priority){
    Task.call(this,name) // Calling the constructor, similar to extending the features
    this.priority= priority;
}
UrgentTask.prototype = Object.create(Task.prototype) // Inheriting all functions / methods

UrgentTask.prototype.notify = function(){
    console.log("Notifying Urgent Task:",this.name)
}

UrgentTask.prototype.save = function(){
    this.notify();
    console.log("Urgent Saving called")
    Task.prototype.save.call(this)
}

var ut = new UrgentTask('Email letter',1)
ut.complete()
ut.save()

console.log("DECORATED TASK:",typeof ut, typeof UrgentTask)

const http = require('http')
