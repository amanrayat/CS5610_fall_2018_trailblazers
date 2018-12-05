import React from 'react'
import './Login.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'email' :  '',
            'password' : '',
        }
    }

    submitLogin = ()=>{
        console.log("the email is " , this.state.email , "the password is " , this.state.password)
    }

    onEmailChange = e=> this.setState({email : e.target.value});
    onPasswordChange = e=> this.setState({password : e.target.value});

    render() {
        return(

            <div style={{'height':'100%'}}>
                <Grid container spacing={24} style={{'height':'100%'}}>
                    <Grid item xs={6}>
                        <div id={'background_pic'}/>
                    </Grid>
                    <Grid item xs={6}>
                        <div id={'login-form'}>
                           <h3> Login In</h3>
                            <form  noValidate autoComplete="off" onSubmit={this.submitLogin}>
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
                                    id="outlined-name"
                                    label="Password"
                                    fullWidth ={true}
                                    type = 'password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <Button variant="contained"
                                        onClick={this.submitLogin}
                                        color="primary"
                                        fullWidth ={true}
                                        >Login
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>

        )
}
}