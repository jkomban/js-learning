const Task = require('./task');

// Three observers below
var notificationService = function () {
    var message = 'Notifying';
    this.update = function (task) {
        console.log(message + ' ' + task.user + ' for task ' + task.name)
    }
}
var loggingService = function () {
    var message = 'Logging';
    this.update = function (task) {
        console.log(message + ' ' + task.user + ' for task ' + task.name)
    }
}

var auditingService = function () {
    var message = 'Auditing';
    this.update = function (task) {
        console.log(message + ' ' + task.user + ' for task: ' + task.name)
    }
}


function ObserverList() {
    this.observerList = [];

}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj)
};
ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}
ObserverList.prototype.count = function () {
    return this.observerList.length;
}
ObserverList.prototype.findIndex = function (observer) {
    for (let i = 0; i < this.observerList.length; i++) {
        if (this.get(i) === observer) {
            return i;
        }
    }
    return -1;
}

// Create an Observable Task
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer)
}

ObservableTask.prototype.notify = function (context) {
    // task will be the context

    var observerCount = this.observers.count();
    //console.log(observerCount,"Inside Observable notify with context :")
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.find = function (observer) {
    console.log(this.observers.findIndex(observer))
}

ObservableTask.prototype.save = function () {
    console.log("Inside Observable task:save")
    this.notify(this)
    Task.prototype.save.call(this) // calling oringinal implementation
}

var task1 = new ObservableTask({ name: 'Complete Documentation', user: 'John' })

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

// Register observers to observersList of the subject(Task)
task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);


task1.save();



