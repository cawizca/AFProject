import * as api from '../api/event';

export const getEvents = ()=>async(dispatch)=>{

    try{
        const {data} =await api.fetchEvents();
        dispatch ({type:'FETCH_ALL',payload:data});
    }catch (error){
        console.log(error);
    }

    
}


export const createEvent= (post) => async(dispatch)=>{
    try {

        const {data} = await api.createEvent(post)

        dispatch({type:'CREATE',payload:data});
        
    } catch (error) {
        console.log(error.message)
    }
}


export const updateEvent =(id,post) => async(dispatch)=>{
    try {

        const {data}  =await api.updateEvent(id,post);
        dispatch({type:'UPDATE',payload:data})

        
    } catch (error) {
        console.log(error)
    }
}


export const deleteEvent =(id)=>async(dispatch)=>{
try {
    await api.deleteEvent(id);
    dispatch({type:'DELETE',payload:id});

} catch (error) {

    console.log(error);
    
}

}