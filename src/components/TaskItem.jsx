import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, toggleComplete } from '../redux/slice/TaskSlice';
import { MdDelete } from 'react-icons/md';

const TaskItem = ({ t }) => {
  const dispatch = useDispatch();

  const markChange = id => {
    dispatch(toggleComplete(id));
  };
  return (
    <div className='max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md flex items-center gap-6 m-5 w-[500px]'>
      <div className='flex-1'>
        <h1 className={`text-xl font-semibold text-gray-800 ${t.Completed ? 'line-through text-gray-400' : ''}`}>{t.title}</h1>
        <p className={`text-gray-600 mt-2 ${t.Completed ? 'line-through text-gray-400' : ''}`}>{t.desc}</p>
      </div>

      <span
        className={`px-3 py-1 text-sm font-medium rounded-full 
      ${t.priority === 'low-priority' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {t.priority === 'low-priority' ? 'Low Priority' : 'High Priority'}
      </span>

      <span>
        <input type='checkbox' id='marked' className='cursor-pointer' onChange={() => markChange(t.id)} checked={t.Completed} />
      </span>

      <button
        onClick={() => {
          dispatch(remove(t.id));
        }}
        className='hover:bg-red-200 rounded-full p-2 cursor-pointer'>
        <MdDelete />
      </button>
    </div>
  );
};

export default TaskItem;
