import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Navbar extends React.Component{

    render(){
        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton  color="inherit" aria-label="Menu">
                            {/*<MenuIcon />*/}
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Beerewery
                        </Typography>
                        <Button style={{ flex: 1 }} color="inherit">Login</Button>
                        <Button style={{ flex: 1 }} color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}