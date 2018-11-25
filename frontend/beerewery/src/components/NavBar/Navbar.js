import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Navbar extends React.Component{

    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="inherit">
                                    Beerewery
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button color="inherit">Login</Button>
                                <Button color="inherit">Register</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}