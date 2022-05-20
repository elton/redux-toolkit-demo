import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

export default function Counter() {
  // We can read data from the store with useSelector hook
  const count = useSelector((state) => state.counter.value);
  // We can dispatch actions with useDispatch hook
  const dispatch = useDispatch();
  const btnStyle =
    'border border-slate-200 shadow-md px-2 py-1 rounded-lg hover:bg-sky-700 hover:text-white';

  return (
    <section className='m-4 space-y-2 text-cyan-700'>
      <h2 className='text-xl font-semibold '>Redux Toolkit hooks</h2>
      <div className='space-x-4'>
        <button
          aria-label='Increment value'
          className={btnStyle}
          onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button
          aria-label='Decrement value'
          className={btnStyle}
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className='font-semibold font-mono'>
        State value: <span className='text-2xl '>{count}</span>
      </div>
    </section>
  );
}
