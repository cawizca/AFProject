import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UilStopwatch } from '@iconscout/react-unicons';
import {
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';

const buttonColor ={
    backgroundColor:"#5E4FA2",
    color:"white",
    fontFamily: "Poppins",
    borderRadius: "12px",
    margin: "5% 0",
    width: "150px"
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1.5),
        width: '400px'
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#5E4FA2",
        },
    },
});

function ItemForm(props){

    const [details, setDetails] = useState({
        topic: "",
        description: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setDetails(prevValue=>{
            return{
                ...prevValue,
                [name] : value
            };
        });
    }

    function handleClick(event){
        props.addWorkshops(details);
        setDetails({
            topic: "",
            description: ""
        });

        event.preventDefault();
    }

    const classes = useStyles();
    return(
        <div>
            <form>
                <ThemeProvider theme={theme}>
                    <TextField name="topic" id="mui-theme-provider-outlined-input" className={classes.margin} label="Workshop name" variant="outlined" fullWidth size="small" onChange={handleChange} value={details.title}/>
                    <TextField name="description" id="mui-theme-provider-outlined-input" className={classes.margin} label="Description" variant="outlined" fullWidth size="small" onChange={handleChange} value={details.description} />
                    <TextField name="date" id="mui-theme-provider-outlined-input" className={classes.margin} label="Date" variant="outlined" fullWidth size="small" onChange={handleChange} />
                    <TextField name="time" id="mui-theme-provider-outlined-input" className={classes.margin} label="Time" variant="outlined" fullWidth size="small" onChange={handleChange} />
                </ThemeProvider>
                <Button type="submit" onClick={handleClick} size="large" variant="contained" style={buttonColor}>Schedule <UilStopwatch style={{marginLeft:"5%"}}/> </Button>
            </form>
        </div>

    )
}

export default ItemForm;