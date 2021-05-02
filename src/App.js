

import React,{useState,useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
//import mainevents from "./img/mainevents.jpg";
import EventPosts from './components/Posts/eventPosts';
import EventForm from './components/Forms/eventForm';
import Styles from './styles';
import {useDispatch} from 'react-redux';
import {getEvents} from './actions/eventPosts';






const App =() =>{

        const [currentId,setCurrentId] = useState(null);
        
        const classes = Styles();
        const dispatch =useDispatch();
        useEffect(()=>{
            dispatch(getEvents());

        },[currentId,dispatch])

    return (
        
            <Container maxwidth ='lg'>

                <AppBar className ={classes.appBar} position ="static" color ='inherit'>

                    <Typography className={classes.heading} variant ="h2" align = "center">  Main Events</Typography>

                   
                </AppBar>

                <Grow in>

                    <Container>
                        <Grid container justify ="space-between" alignItems="stretch" spacing ={3}>

                            <Grid item xs ={12} sm ={7}>
                                </Grid>

                                <EventPosts setCurrentId ={setCurrentId} />     


                                <Grid item xs ={12} sm ={4}>
                                    <EventForm  currentId={currentId} setCurrentId ={setCurrentId}/>
                                </Grid>

                        </Grid>
                    </Container>

                </Grow>


            </Container>

           
    );
}

export default App;