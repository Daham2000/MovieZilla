import {combineReducers} from 'redux';
import users from './user';
import post from './posts';

export default combineReducers({
    users,
    post
});