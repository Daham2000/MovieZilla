export default (users=[], action) => {
    switch (action.type){
        case 'SIGNUP':
            return [...users, action.payload];
        default:
            return null;
    }
}