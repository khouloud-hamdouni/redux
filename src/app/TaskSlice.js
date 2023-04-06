import {createslice} from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const TaskSlice =
    
    const tasks:[
        { id: 1,description: 'tasks1', done: false},
        { id: 2,description: 'tasks2', done: false},
        { id: 3,description: 'tasks3', done: true},

    ],
    reducers: {
        addTodo:(state,action)=>{
           const newTodo={
            id: Date.now(),
            description:action.payload.description,
            done:false
           };
           state.push(newTodo);
    },
    toggleComplete: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
    },
},
extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
        return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
        state.push(action.payload.todo);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
        const index = state.findIndex(
            (todo) => todo.id === action.payload.todo.id
        );
        state[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
    },
},
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;


export const {addTodo}= TaskSlice.actions;
export default TaskSlice.reducer;