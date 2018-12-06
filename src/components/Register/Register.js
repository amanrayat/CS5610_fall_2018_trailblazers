import React from 'react'
import './Register.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoaderButton from '../LoaderButton/LoaderButton';
import UserService from '../../services/UserService'


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username : '',
            firstName : '',
            lastName : '' ,
            email :  '',
            password : '',
            verifyPassword : '',
            newUser: null
        }
    }

    submitRegister = (event)=>{
        event.preventDefault();

        this.setState({isLoading: true});

        const user = {
            username: this.state.username,
            password: this.state.password
        };


        UserService.registerUser(user).then(res => {
            if (res.data) {
                this.props.userHasAuthenticated(true);
                this.props.history.push("/");
            } else {
                alert("Username Already Taken")
                this.setState({isLoading: false})
            }
        }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});
        })    };

    onEmailChange = e=> this.setState({email : e.target.value});
    onPasswordChange = e=> this.setState({password : e.target.value});
    onUsernameChange = e=> this.setState({username : e.target.value});
    onFirstNameChange = e=> this.setState({firstName : e.target.value});
    onLastNameChange = e=> this.setState({lastName : e.target.value});
    onPasswordConfirmChange = e=> this.setState({verifyPassword : e.target.value});

    validateForm = () => {
        return (
            this.state.username.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.verifyPassword
        );
    };

    render() {
        return(

            <div style={{'height':'100%'}}>
                <Grid container spacing={24} style={{'height':'100%'}}>
                    <Grid item xs={6}>
                        <div id={'register-form'}>
                            <h3> Register</h3>
                            <form  noValidate autoComplete="off" onSubmit={this.submitRegister}>
                                <TextField
                                    id="outlined-name"
                                    label="Username"
                                    className={'input-field'}
                                    fullWidth ={true}
                                    autoFocus={true}
                                    value={this.state.username}
                                    onChange={this.onUsernameChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <TextField
                                    id="outlined-name"
                                    label="First Name"
                                    className={'input-field'}
                                    fullWidth ={true}
                                    autoFocus={true}
                                    value={this.state.firstName}
                                    onChange={this.onFirstNameChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <TextField
                                    id="outlined-name"
                                    label="Last Name"
                                    className={'input-field'}
                                    fullWidth ={true}
                                    autoFocus={true}
                                    value={this.state.lastName}
                                    onChange={this.onLastNameChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <TextField
                                    id="outlined-name"
                                    label="Email Id"
                                    className={'input-field'}
                                    fullWidth ={true}
                                    autoFocus={true}
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <TextField
                                    id="outlined-pass"
                                    label="Password"
                                    fullWidth ={true}
                                    type = 'password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                {/*<br/>*/}
                                <TextField
                                    id="outlined-confirm"
                                    label="Confirm Password"
                                    fullWidth ={true}
                                    type = 'password'
                                    error={this.state.verifyPassword !==this.state.password}
                                    value={this.state.verifyPassword}
                                    onChange={this.onPasswordConfirmChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <LoaderButton
                                    block
                                    bsSize="large"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                    isLoading={this.state.isLoading}
                                    text="Sign up"
                                    loadingText="Signing up…"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div id={'background_pic2'}/>
                    </Grid>
                </Grid>
            </div>

        )
    }
}