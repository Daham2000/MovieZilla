const post = (posts=[], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return  action.payload;
        case 'LIKE':
            return posts.map((post) => post._id===action.payload._id ? action.payload : post);
        case 'UNLIKE':
            return posts.map((post) => post._id===action.payload._id ? action.payload : post);
        default :
            return posts;
    }
}

export default post;