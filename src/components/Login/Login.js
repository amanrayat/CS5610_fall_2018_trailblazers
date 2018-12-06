import React from 'react'
import './Login.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoaderButton from '../LoaderButton/LoaderButton';
import UserService from '../../services/UserService'


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
        }
    }

    submitLogin = (event) => {
        console.log("the email is ", this.state.email, "the password is ", this.state.password);
        event.preventDefault();

        this.setState({isLoading: true});

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        UserService.login(user)
            .then(res => {
                if (res.data) {
                    this.props.userHasAuthenticated(true);
                    this.props.history.push("/");
                } else {
                    alert("email or password not in database")
                    this.setState({isLoading: false})
                }
            }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});
        })
    };

    onEmailChange = e => this.setState({email: e.target.value});
    onPasswordChange = e => this.setState({password: e.target.value});

    render() {
        return (

            <div style={{'height': '100%'}}>
                <Grid container spacing={24} style={{'height': '100%'}}>
                    <Grid item xs={6}>
                        <div id={'background_pic'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <div id={'login-form'}>
                            <h3> Login In</h3>
                            <form noValidate autoComplete="off" onSubmit={this.submitLogin}>
                                <TextField
                                    id="outlined-name"
                                    label="Email Id"
                                    className={'input-field'}
                                    fullWidth={true}
                                    autoFocus={true}
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <TextField
                                    id="outlined-name"
                                    label="Password"
                                    fullWidth={true}
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <LoaderButton
                                    block
                                    bsSize="large"
                                    className="btn-primary"
                                    disabled={!this.submitLogin}
                                    type="submit"
                                    isLoading={this.state.isLoading}
                                    text="Sign In"
                                    loadingText="Logging in…"
                                />
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>

        )
    }
}