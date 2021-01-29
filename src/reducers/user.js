const user =  (users=[], action) => {
    switch (action.type){
        case 'SIGNUP':
            return [...users, action.payload];
        default:
            return users;
    }
}

export default user;