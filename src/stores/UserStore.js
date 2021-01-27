import { extendObservable } from "mobx";

class UserStore {
    constructor(){
        extendObservable(this, {
            loading:false,
            isLoggedin: false,
            email: '',
            userName: ''
        })
    }
}

export default new UserStore();