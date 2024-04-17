import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {reset} from './counterSlice'; 

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json();
});

export const fetchTodo = createAsyncThunk('fetchTodo', async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/"+id)
    return response.json();
})
export const selectTodoById = (state, todoId) => {
return state.todos.find(todo => todo.id === todoId.toString())
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        status: 'idle', // loading, completed
        singleTodo: {},
    },

    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload
            state.status = 'completed'
        })

        builder.addCase(reset, () => {
            return [] 
        });

        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.singleTodo = action.payload
        })


    }
})

export default todoSlice.reducer;
export const {load} = todoSlice.actions
