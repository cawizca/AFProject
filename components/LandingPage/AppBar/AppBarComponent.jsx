import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid"
function AppBarComponent(){
    return(
        <div>
        <AppBar position="fixed" color="transparent">
            <Toolbar>
                <Typography variant="h6">
                    WebName
                </Typography>
                <Grid container justify="flex-end">
                    <Button variant="h6">
                        Home
                    </Button>
                    <Button variant="h6">
                        Keynotes
                    </Button>
                    <Button variant="h6">
                        Workshops
                    </Button>
                    <Button variant="h6">
                        Committie
                    </Button>
                    <Button variant="h6">
                        Past Proceeding
                    </Button>
                    <Button variant="outlined">
                        Contact
                    </Button>
                </Grid>

            </Toolbar>
        </AppBar>
        </div>
    );
}

export default AppBarComponent;