const initState = {
  tasks: [
    {
      id: '1',
      name: 'John',
      email: 'john@mail.ru',
      description:
        'As I dove in to learning React, I struggled to put all the moving pieces together, trace the flow of data through my application, and understand the larger architecture. I think my Ember experience spoiled me a bit by abstracting away pretty much all of the boiler plate, and offering command line generators for the rest.',
      status: 'In Progress'
    },
    {
      id: '2',
      name: 'Mario',
      email: 'mario@gmail.ru',
      description:
        'We all know that React is fast. It uses the virtual DOM to track the state of the actual DOM, only re-rendering discrete sections of the DOM as changes to application state dictate.',
      status: 'In Progress'
    },
    {
      id: '3',
      name: 'Kate',
      email: 'Kate@yahoo.com',
      description:
        'To my mind, Ember somewhat obscures this DDAU flow, and it never really felt cogent to me until manually implementing it in React.',
      status: 'In Progress'
    },
    {
      id: '4',
      name: 'Cristofer',
      email: 'cristofer@mail.ru',
      description:
        'As I dove in to learning React, I struggled to put all the moving pieces together, trace the flow of data through my application, and understand the larger architecture. I think my Ember experience spoiled me a bit by abstracting away pretty much all of the boiler plate, and offering command line generators for the rest.',
      status: 'In Progress'
    },
    {
      id: '5',
      name: 'Rayan',
      email: 'rayan@gmail.ru',
      description:
        'We all know that React is fast. It uses the virtual DOM to track the state of the actual DOM, only re-rendering discrete sections of the DOM as changes to application state dictate.',
      status: 'In Progress'
    },
    {
      id: '6',
      name: 'Selena',
      email: 'selena@yahoo.com',
      description:
        'To my mind, Ember somewhat obscures this DDAU flow, and it never really felt cogent to me until manually implementing it in React.',
      status: 'In Progress'
    }
  ]
};

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      let newTask = [...state.tasks, action.payload];
      return {
        ...state,
        tasks: newTask
      };
    case 'EDIT_TASK':
      let updatedTask = action.payload;
      let newTasks = state.tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      return {
        ...state,
        tasks: newTasks
      };
    default:
      return state;
  }
};

export default taskReducer;
