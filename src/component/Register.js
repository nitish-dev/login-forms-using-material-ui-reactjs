import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    link: {
        marginTop: theme.spacing.unit * 2,
    },
});

class Register extends Component {
    constructor() {
        super();
        this.state = {
            users: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const { name, value } = e.target;
        const { users } = this.state;
        this.setState({
            users: {
                ...users,
                [name]: value
            }
        })
    }
    onSubmit(e) {
        e.preventDefault();
        let data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];;
        data.push(this.state);
        if (localStorage) {
            localStorage.setItem('user', JSON.stringify(data));
        }

        this.setState({
            users: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            }
        })
    }
    render() {
        const { classes } = this.props;
        const { users } = this.state;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h5">
                        Sign up
        </Typography>
                    <form className={classes.form} onSubmit={this.onSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <Input id="firstName" name="firstName" onChange={this.onChange} autoComplete="firstName" value={users.firstName} autoFocus />
                        </FormControl>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <Input id="lastName" name="lastName" onChange={this.onChange} autoComplete="lastName" value={users.lastName} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="userName">User Name</InputLabel>
                            <Input id="userName" name="userName" onChange={this.onChange} autoComplete="userName" value={users.userName} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.onChange} name="password" autoComplete="password" value={users.password} />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
          </Button>
                    </form>
                    <Link component={RouterLink} className={classes.link} to="/">
                        Cancel</Link>
                </Paper>
            </main>
        )
    }
}
export default withStyles(styles)(Register);