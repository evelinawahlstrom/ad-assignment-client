import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import asset1 from '../assets/asset1.jpg'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'
import { Route, Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    image: {
      backgroundImage: `url(${asset2})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    item1: {
    backgroundImage: `url(${asset1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignSelf: 'stretch',
    height: 200,
    margin: 'auto',
    /// change auto so that it's lower on the screen
    }, 
    title: {
        color: 'white',
        fontSize: 20,
    },
    text: {
        color: 'white',
    },
    item2: {
    alignSelf: 'stretch',
    width: 100,
    height: 200,
    margin: 'auto'
    },
    bigAvatar: {
    width: 84,
    height: 53,
    backgroundImage: `url(${asset3})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
    },
  }));
  
  export default function RegisterForm(props) {  
    console.log(props.values);
    const classes = useStyles();
    const { onSubmit, onChange, values } = props;
    return (
        <div style={{ width: '100%' }}>
        <Box display="flex" p={1} 
        className={classes.image}>
        <Box p={1} mt={2} flexGrow={1} className={classes.item1}>
        <p className={classes.title}>REDIFINING MOBILE 
        <br/>ADVERTISING</p>
        <p className={classes.text}>Please use this form to register.<br/>
        If you are a member, please <u>login.</u></p>
      </Box>
      <Box p={1} 
      flexGrow={3.5} bgcolor="white" className={classes.item2}>
      <Avatar variant="square" alt="Adludio logo" className={classes.bigAvatar}/>
      <p>Register</p>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
            //   fullWidth
              name='fullName'
              label='Full Name'
              type='text'
              id='fullName'
            //   autoComplete='current-code'
              onChange={onChange}
            //   value={values.code}
            />
            <TextField
            variant='outlined'
            margin='normal'
            required
            // fullWidth
            name='email'
            label='E-mail'
            type='text'
            id='email'
            // autoComplete='current-code'
            onChange={onChange}
          //   value={values.code}
          />
          <TextField
          variant='outlined'
          margin='normal'
          required
        //   fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
        //   autoComplete='current-code'
          onChange={onChange}
        //   value={values.code}
        />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.onSubmit}>
              Register
            </Button>
            <Box mt={5}></Box>
          </form>
      </Box>
        </Box>
      </div>
    );
  }