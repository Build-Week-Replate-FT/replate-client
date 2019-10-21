import React from 'react';
import useForm from 'react-hook-form'

export function BusinessSignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" name="Email" ref={register({required: true})} />
        <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 100})} />
        <input type="password" placeholder="Password" name="Password" ref={register({required: true, min: 6})} />
        <input type="text" placeholder="Address" name="Address" ref={register({required: true, min: 6})} />
        <input type="text" placeholder="City" name="City" ref={register({required: true, min: 6})} />
        <input type="text" placeholder="State" name="State" ref={register({required: true, min: 6})} />
        <input type="text" placeholder="Zip" name="Zip" ref={register({required: true, min: 6})} />
        <input type="text" placeholder="Website" name="Website" ref={register({required: true, min: 6})} />

        <input type="submit" />
        </form>
    );
}