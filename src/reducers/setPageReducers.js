export default (state = 0, action) => {
    switch (action.type) {
        case 'SETPAGE':
            return action.params;
        default:
            return state;
    }
}