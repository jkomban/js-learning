var TOTAL_OBJECTS = 100000

var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}



function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    var get = function (name) {
        return tasks[name]
    };
    var getCount = function () {
        return count;
    };

    return {
        add, get, getCount
    };
}

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5, 6];
var users = ['Jon', 'Eric', 'Amanda'];
var completed = [true, false];


var FlyweightTask = function (data) {
    // console.log('Inside FlyweightTask:',data)
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed)
    this.name = data.name;
}

function Flyweight(project,priority,user,completed) {
    // console.log("Here you go",data)
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
}

var FlyweightFactory = function () {
    var flyweights = {}
    var counter=0;
    // Arguments for below is NON-unique fields
    var get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed)
            counter++;
        }
        // else{
        //     console.log(counter,"duplicate =>",project + priority + user + completed)
        // }
        
        return flyweights[project + priority + user + completed]
    }

    var getCount = function () {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    }

    return {
        get, getCount
    }
}();

function FlyweightTaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function (data) {
        // console.log("Called from ",data)
        tasks[data.name] = new FlyweightTask(data);
        count++;
    };
    var get = function (name) {
        return tasks[name]
    };
    var getCount = function () {
        return count;
    };

    return {
        add, get, getCount
    };
}


var tasks = new TaskCollection();
var initalMemory = process.memoryUsage().heapUsed;
for (let i = 0; i < TOTAL_OBJECTS; i++) {
    tasks.add({
        name: 'task' + i,
        project: projects[ Math.floor( Math.random()* 4)],
        priority: priorities[Math.floor(Math.random() * 6)],
        user: users[Math.floor(Math.random() * 3)],
        completed: completed[Math.floor(Math.random() * 2)]
    })

}
var afterMemory = process.memoryUsage().heapUsed;
console.log("NORMAL :",initalMemory, " vs ", afterMemory, " for :", tasks.getCount(), "=>", (afterMemory - initalMemory))



var flyweightTasks = new FlyweightTaskCollection();
initalMemory = process.memoryUsage().heapUsed;
for (let i = 0; i < TOTAL_OBJECTS; i++) {
  
    
    flyweightTasks.add({
        name: 'task' + i,
        project: projects[ Math.floor( Math.random()* 4)],
        priority: priorities[Math.floor(Math.random() * 6)],
        user: users[Math.floor(Math.random() * 3)],
        completed: completed[Math.floor(Math.random() * 2)]
    })

}
afterMemory = process.memoryUsage().heapUsed;
console.log("Flyweights: ", initalMemory, " vs ", afterMemory, " for :", FlyweightFactory.getCount(), "=>", (afterMemory - initalMemory))
