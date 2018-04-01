export default (state = 1, action) => {
    switch (action.type) {
        case 'SET_UID':
            return state += 1;
        default:
            return state;
    }
}