const post = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'LIKE':
            return posts;
        case 'UNLIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'GETMOVIES':
            return action.payload;
        case 'GETVSERIES':
            return action.payload;
        case 'GETHOLLYWOOD':
            return action.payload;
        default:
            return posts;
    }
}

export default post;