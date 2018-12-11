import React from 'react'
import './Login.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LoaderButton from '../LoaderButton/LoaderButton';
import UserService from '../../services/UserService'
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import FormControl from "@material-ui/core/FormControl/FormControl";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: '',
            password: '',
            role : '',
        }
    }

    submitLogin = (event) => {
        event.preventDefault();

        this.setState({isLoading: true});

        const user = {
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        };

        UserService.login(user)
            .then(res => {
                if (res.data) {
                    this.props.userHasAuthenticated(true);
                    if(res.data[0].type === 'ADMIN'){
                        this.props.history.push("/admin");
                    } else {
                        this.props.history.push("/");
                    }

                } else {
                    alert("email or  not in database");
                    this.setState({isLoading: false})
                }
            }).catch(e => {
            alert(e.message);
            this.setState({isLoading: false});
        })
    };

    onEmailChange = e => this.setState({email: e.target.value});
    onPasswordChange = e => this.setState({password: e.target.value});
    onRoleChange = e =>this.setState({role : e.target.value});


    render() {
        return (
            <div style={{'height': '100%'}}>
                <Grid container spacing={24} style={{'height': '100%'}}>
                    <Grid item md={6} only={['md', 'xl']}>
                        <div id={'background_pic'}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="m-3 mt-5" id={'login-form'}>
                            <h3 className={'heading'}> Sign In</h3>
                            <form noValidate autoComplete="off" onSubmit={this.submitLogin}>
                                <TextField
                                    id="outlined-email"
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
                                    id="outlined-password"
                                    label="Password"
                                    fullWidth={true}
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <br/>
                                <FormControl style={{width:'100%'}} className={'mb-4'}>
                                    <InputLabel htmlFor="type-simple">Type</InputLabel>
                                    <Select
                                        value={this.state.role}
                                        onChange={this.onRoleChange}>
                                        <MenuItem value={'CUSTOMER'}>Customer</MenuItem>
                                        <MenuItem value={'EVENTPLANNER'}>Event Planner</MenuItem>
                                        <MenuItem value={'ADMIN'}>Admin</MenuItem>
                                    </Select>
                                </FormControl>
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