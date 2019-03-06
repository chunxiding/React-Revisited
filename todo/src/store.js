import { todos } from './reducer';
import { createStore } from 'redux';

const defaultTodos = [
    { 
        id: 1,
        content: "TODO 1"
    },
    { 
        id: 2,
        content: "TODO 2"
    },
    { 
        id: 3,
        content: "TODO 3"
    },
];

const store = createStore(todos, defaultTodos);

export default store;