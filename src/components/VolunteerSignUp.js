import React from 'react';
import useForm from 'react-hook-form'

export function VolunteerSignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" name="Email" ref={register({required: true})} />
        <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 100})} />
        <input type="password" placeholder="Password" name="Password" ref={register({required: true, min: 6})} />

        <input type="submit" />
        </form>
    );
}