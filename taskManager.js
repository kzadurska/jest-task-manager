class TaskManager {
  consturctor() {
    this.taskList = []
  }

  getList() {
    return this.taskList
  }

  addTask(name, callback, context) {
    this.taskList.push({ name, callback, context })
  }

  run() {
    this.taskList.forEach(({ callback, context }) => {
      callback.call(context);
    });
  }
}

export default TaskManager