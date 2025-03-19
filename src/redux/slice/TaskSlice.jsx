import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all',
};
export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleComplete: (state, action) => {
      // id as input
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.Completed = !task.Completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    remove: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
  },
});

export const { add, toggleComplete, setFilter, remove } = TaskSlice.actions;
export default TaskSlice.reducer;
