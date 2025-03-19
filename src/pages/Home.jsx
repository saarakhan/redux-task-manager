import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskItem from '../components/TaskItem';
import { NavLink } from 'react-router-dom';
import { setFilter } from '../redux/slice/TaskSlice';

const Home = () => {
  const { tasks, filter } = useSelector(state => state.task);
  const dispatch = useDispatch();

  const filterTask = tasks.filter(task => {
    if (filter == 'completed') return task.Completed;
    if (filter == 'pending') return !task.Completed;
    return true;
  });
  return (
    <div>
      {tasks.length > 0 ? (
        <div className='flex flex-col items-center mt-6'>
          <div className='flex gap-4 mb-4'>
            {['all', 'completed', 'pending'].map(type => (
              <button
                key={type}
                onClick={() => dispatch(setFilter(type))}
                className={`px-4 py-2 rounded-lg font-semibold transition 
                ${filter === type ? 'bg-red-300 text-black' : 'bg-gray-200 text-black'}
                hover:bg-red-400`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {filterTask.length > 0 ? filterTask.map(t => <TaskItem key={t.id} t={t} />) : <p className='text-gray-500 text-lg mt-4'>No task</p>}
        </div>
      ) : (
        <div className=' bg-rose-50 flex flex-col items-center justify-center h-[100%] p-4'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>No tasks! Create one</h1>
          <NavLink to='/add' className='bg-red-300 text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-400 transition duration-200'>
            Add Task
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Home;
