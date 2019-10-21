import React from 'react';
import useForm from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export function VolunteerSignUp() {
	const { register, handleSubmit, errors } = useForm();
	const classes = useStyles();
  const onSubmit = data => console.log(data);

  return (
    <Paper>
			<h1>Volunteer Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Name"
					className={classes.textField}
					// value={values.name}
					// onChange={handleChange('name')}
					margin="normal"
					variant="outlined"
					innerRef={register({required: true, maxLength: 100})}
      	/>
 				<TextField
					label="Email"
					className={classes.textField}
					type='email'
					margin="normal"
					variant="outlined"
					innerRef={register({required: true})}
      	/>
 				<TextField
					label="Password"
					className={classes.textField}
					type='password'
					margin="normal"
					variant="outlined"
					innerRef={register({required: true, min: 6})}
      	/>
        {/* <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 100})} /> */}
        {/* <input type="email" placeholder="Email" name="Email" ref={register({required: true})} />
        <input type="password" placeholder="Password" name="Password" ref={register({required: true, min: 6})} /> */}
        <button type="submit" >Sign Up</button>
      </form>
    </Paper> 
   );
}