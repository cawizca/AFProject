import axios from 'axios';

const urlget = 'http://localhost:8070/mainevent/readAll';
const urladd = 'http://localhost:8070/mainevent/add';
const urlupdate = 'http://localhost:8070/mainevent/update';
const urldelete = 'http://localhost:8070/mainevent/delete';

export const fetchEvents =()=>axios.get(urlget);
export const createEvent =(newEvent)=>axios.post(urladd,newEvent);
export const updateEvent = (id,updateEvent)=>axios.patch(`${urlupdate}/${id}`,updateEvent);
export const deleteEvent = (id)=>axios.delete(`${urldelete}/${id}`);


