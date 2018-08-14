var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('Completing Legacy task:'+this.name)
    this.completed=true;
}

Task.prototype.save = function(){
    console.log('Saving Legacy task:'+this.name)
}

// var myTask = new Task('Legacy Task')
// myTask.complete()
// myTask.save()


//  Until the above line , its a plain javascript

var urgentTask = new Task('Urgent')
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log('This is an Urgent task notification:',this.name)
}
urgentTask.complete()
urgentTask.save = function(){
    this.notify()
    Task.prototype.save.call(this)
}

urgentTask.save()

// console.clear()
// console.log(urgentTask.__proto__)