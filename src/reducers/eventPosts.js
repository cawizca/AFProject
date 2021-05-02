export default (eventPosts=[],action) =>{
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...postMessage,action.payload];

            case 'UPDATE':
            return eventPosts.map((post)=>post._id === action.payload._id ? action.payload:post);

            case 'DELETE':
                return eventPosts.filter((post)=>post._id !== action.payload._id );


        default:
            return eventPosts;

    }
}