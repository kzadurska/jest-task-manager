import TaskManager from './taskManager'

describe('Task Manager', () => {
  test('it should exist', () => {
    expect(TaskManager).toBeTruthy()
  })

  test('is a function', () => {
    expect(typeof TaskManager).toBe('function')
  })
})

describe('Task Manager methods', () => {
  let instance;

  beforeEach(() => {
    instance = new TaskManager();
  });

  afterEach(() => {
    instance = null;
  });

  test('getList is a function', () => {
    expect(instance.getList).toBeInstanceOf(Function)
  })

  test('getList returns array', () => {
    const list = instance.getList()

    expect(list).toEqual([])
  })

  test('has working addTask method', () => {
    expect(instance.addTask.length).toEqual(3);
    expect(instance.getList()).toHaveLength(0);
    instance.addTask('task1', () => { console.log(this); }, this);
    expect(instance.getList()).toHaveLength(1);
  });

  test('has working run() method', () => {
     const context = {};
     const results = [];
     instance.addTask('task1', function () { results.push(this); }, context);
     instance.addTask('task2', () => { results.push(5); }, this);
     instance.run();
     expect(results).toEqual([context, 5]);
   });
})