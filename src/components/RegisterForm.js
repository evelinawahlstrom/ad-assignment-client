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
    }, 
    item2: {
    alignSelf: 'stretch',
    width: 50,
    height: 200,
    margin: 'auto'
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
        <h1>>REDIFINING MOBILE ADVERTISING</h1>
        <b><p>Please use this form to register.<br/>
        If you are a member, please <u>login.</u></p></b>
      </Box>
      <Box p={1} 
      flexGrow={3.5} bgcolor="white" className={classes.item2}>
    </Box>
        </Box>
      </div>
    );
  }

// const useStyles = makeStyles(theme => ({
//     image: {
//       backgroundImage: `url(${asset2})`,
//       height: '100vh',
//     },
//     bigAvatar: {
//         width: 84,
//         height: 53,
//         backgroundImage: `url(${asset3})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'contain'
//     },
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       alignItems: 'center',
//     },
//     form: {
//       width: '60%', // Fix IE 11 issue.
//       margin: theme.spacing(1),
//       alignItems: 'center'
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));
  
//   export default function RegisterForm(props) {
//     console.log(props.values);
//     const classes = useStyles();
//     const { onSubmit, onChange, values } = props;
  
//     // if (!props.values) return 'wating';
//     return (
//       <Grid container component='main' className={classes.image}>
//         <CssBaseline />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <div className={classes.paper}>
//           <Avatar variant="square" alt="Adludio logo" className={classes.bigAvatar}/>
//             <Typography component='h1' variant='h5'>
//               Login
//             </Typography>
//             {props.valid ? <p>Please login to get to the Admissions Test</p>
//               : <p>Code must not be empty</p>}
//             <form className={classes.form} noValidate onSubmit={onSubmit}>
//               <Button
//                 type='submit'
//                 fullWidth
//                 variant='contained'
//                 color='primary'
//                 className={classes.onSubmit}>
//                 Login
//               </Button>
  
//               <Box mt={5}></Box>
//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     );
//   }

//   <TextField
//                 variant='outlined'
//                 margin='normal'
//                 required
//                 fullWidth
//                 name='code'
//                 label='Your personal code'
//                 type='code'
//                 id='code'
//                 autoComplete='current-code'
//                 onChange={onChange}
//                 value={values.code}
//               />