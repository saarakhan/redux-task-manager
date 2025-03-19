import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/slice/TaskSlice';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id:useId(),
    title: '',
    desc: '',
    priority: '',
    Completed:false
  });
  const changeHandler = event => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const submitHandler = event => {
    event.preventDefault();
    dispatch(add(formData));
    toast.success('Task Created!');
    navigate('/');
  };
  return (
    <div>
      <form action='' onSubmit={submitHandler} className='bg-white max-w-md mx-auto mt-30 p-6  rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Add New Task</h2>

        <div className='mb-4'>
          <input
            type='text'
            onChange={changeHandler}
            placeholder='Title'
            name='title'
            value={formData.title}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            onChange={changeHandler}
            placeholder='Description'
            name='desc'
            value={formData.desc}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>

        <fieldset className='mb-4'>
          <legend className='font-medium text-gray-700'>Priority</legend>
          <div className='flex items-center mb-2'>
            <input type='radio' onChange={changeHandler} name='priority' id='low-priority' value='low-priority' checked={formData.priority === 'low-priority'} className='mr-2' />
            <label htmlFor='low-priority' className='text-gray-700'>
              Low Priority
            </label>
          </div>
          <div className='flex items-center'>
            <input type='radio' onChange={changeHandler} name='priority' id='high-priority' value='high-priority' checked={formData.priority === 'high-priority'} className='mr-2' />
            <label htmlFor='high-priority' className='text-gray-700'>
              High Priority
            </label>
          </div>
        </fieldset>

        <button type='submit' className='w-full bg-red-300 text-black font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-200'>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
