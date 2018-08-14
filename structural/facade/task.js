var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log(task.name + " :Task completed")
        },
        setCompleteDate: function (task) {
            task.completeDate = new Date();
            console.log(task.name + " :Task completed on ", task.completeDate)
        },
        notifyCompletion: function (task) {
            console.log(task.name + " :Task nofitification send ")
        },
        save: function (task) {
            console.log(task.name + " :Task saved")
        }
    }
}();


/* Below code is Facade*/
var TaskServiceWrapper = function () {
    var completeAndNotify = function (task) {
        TaskService.complete(task);
        if (myTask.completed === true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task);
            TaskService.save(task);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }
}

var myTask = new Task({
    name: 'My Task',
    priority: 1,
    user: 'John',
    project: 'Courses',
    completed: false
})


// TaskService.complete(myTask)
// if (myTask.completed === true) {
//     TaskService.setCompleteDate(myTask);
//     TaskService.notifyCompletion(myTask);
//     TaskService.save(myTask);
// }
// console.log(myTask)


var Facade = new TaskServiceWrapper()
Facade.completeAndNotify(myTask)