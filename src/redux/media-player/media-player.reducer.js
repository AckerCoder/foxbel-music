const INITIAL_STATE = {
    toogleButton: false
}

const mediaPlayer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLAY':
            return {
                ...state,
                toogleButton: !state.toogleButton
            }
        case 'PAUSE':
            return{
                ...state,
                toogleButton: !state.toogleButton
            }    
        default:
            return state;
    }
}

export default mediaPlayer;