import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import asset1 from '../assets/asset1.jpg'
import asset2 from '../assets/asset2.png'
import asset3 from '../assets/asset3.png'
import Fab from '@material-ui/core/Fab';
import GoogleLogin from 'react-google-login'

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
        backgroundSize: '100%',
        height: 'auto',
        width: '100%',
        margin: 'auto',
        borderRadius: 25,
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    text: {
        color: 'white',
    },
    item2: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        borderRadius: 25,
    },
    bigAvatar: {
        width: 84,
        height: 53,
        backgroundImage: `url(${asset3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },
    form: {
        margin: 'auto',
    },
}));

export default function RegisterForm(props) {
    console.log(props.values);
    const classes = useStyles();
    const responseGoogle = (response) => {
        console.log(response)
    }
    const { onSubmit, onChange, values } = props;
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1}
                className={classes.image}>
                <Box p={16} flexGrow={1} mt={2}
                    className={classes.item1}>
                    <p className={classes.title}>REDIFINING MOBILE
            <br />ADVERTISING</p>
                    <p className={classes.text}>Please use this form to register.<br />
                        If you are a member, please <u>login.</u></p>
                </Box>
                <Box p={2}
                    flexGrow={1} bgcolor="white" className={classes.item2}>
                    <Avatar
                        variant="square"
                        alt="Adludio logo"
                        className={classes.bigAvatar} />
                    <form
                        className={classes.form}
                        noValidate onSubmit={onSubmit}>
                        <p>Register</p>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='fullName'
                            label='Full Name'
                            type='text'
                            id='fullName'
                            onChange={onChange}
                            value={values.fullName}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='email'
                            label='E-mail'
                            type='text'
                            id='email'
                            onChange={onChange}
                            value={values.email}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            onChange={onChange}
                            value={values.password}
                        />
                        <Box m={2} align='center'>
                        <Fab
                            variant="extended"
                            position="center"
                            type="submit"
                            size="medium"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}
                        > REGISTER
                  </Fab>
                  </Box>
                  <Box m={2} align='center'>
                        <GoogleLogin
                            clientId="467613427594-ols96qcde603evsgui93fugr5bb17rjf.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        </Box>
                    </form>
                </Box>
            </Box>
        </div>
    );
}
