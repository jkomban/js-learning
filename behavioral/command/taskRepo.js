var repo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    },
    save: function (task) {
        repo.tasks[task.id] = task
        console.log('Saving ' + task.name + ' to the db')
    },
    replay: function () {
        for (let i = 0; i < this.commands.length; i++) {
            var command = repo.commands[i]
            this.executeNoLog(command.name, command.obj)
        }
    }

}

repo.executeNoLog = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (repo[name]) {
        return repo[name].apply(repo, args)
    }
}

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if (repo[name]) {
        return repo[name].apply(repo, args)
    }
}

repo.execute('save', { id: 1, name: 'Task 1' })
repo.execute('save', { id: 2, name: 'Task 2' })
repo.execute('save', { id: 3, name: 'Task 3' })
repo.execute('save', { id: 4, name: 'Task 4' })

console.log(repo.tasks)
repo.tasks = {}
console.log(repo.tasks)
repo.replay()
console.log(repo.tasks)