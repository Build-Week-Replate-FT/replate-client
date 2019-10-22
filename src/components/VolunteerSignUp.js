import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { register as registerNewUser } from '../api';

export function VolunteerSignUp({ history }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const authentication = useSelector(state => state.authentication);
  const onSubmit = data => {
    console.log(data);
    registerNewUser(
      data,
      {
        request: action => dispatch(action),
        success: action => dispatch(action),
        failure: action => dispatch(action),
      },
      () => history.push('/')
    );
  };

  console.log(authentication);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Name' name='Name' ref={register({ required: true, maxLength: 100 })} />
      <input type='email' placeholder='Email' name='Email' ref={register({ required: true })} />
      <input type='password' placeholder='Password' name='Password' ref={register({ required: true, min: 6 })} />

      <button type='submit'>Sign Up</button>
    </form>
  );
}
