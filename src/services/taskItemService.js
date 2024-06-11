const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        completed: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description of Task 2',
        completed: false
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description of Task 3',
        completed: false
    }
]

class TaskItemService {
    static getTaskItemById(id) {
        // Implement logic to retrieve a task item by its ID
        return tasks.find((task) => task.id === parseInt(id))
    }

    static getAllTasks() {
        // Implement logic to retrieve a task item by its ID
        return tasks
    }
}

module.exports = TaskItemService;