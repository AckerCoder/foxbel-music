import { setUser } from './user.utils';

const INITIAL_STATE = {
    user: ""
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: setUser(action.payload)
            }
        default:
            return state;
    }
}

export default user;