import React from 'react'
import './Register.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'username' : '',
            'firstName' : '',
            'lastName' : '' ,
            'email' :  '',
            'password' : '',
            'verifyPassword' : ''
        }
    }

    submitRegister = ()=>{
        console.log("the email is " , this.state.email , "the password is " , this.state.password)
    };

    onEmailChange = e=> this.setState({email : e.target.value});
    onPasswordChange = e=> this.setState({password : e.target.value});
    onUsernameChange = e=> this.setState({username : e.target.value});
    onFirstNameChange = e=> this.setState({firstName : e.target.value});
    onLastNameChange = e=> this.setState({lastName : e.target.value});
    onPasswordConfirmChange = e=> this.setState({verifyPassword : e.target.value});

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
                                <Button variant="contained"
                                        disabled={this.state.verifyPassword !==this.state.password}
                                        onClick={this.submitRegister}
                                        color="primary"
                                        fullWidth ={true}
                                >Register
                                </Button>
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