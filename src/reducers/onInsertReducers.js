import _ from 'lodash';

export default (state = [], action) => {
    var arr;
    switch (action.type) {
        case 'GOTOREDUCERS_ONINSERT':
            console.log(state);
            arr = _.concat(state, action.params);
            return arr;
        case 'DELETE_UID':
            var index = _.findIndex(state, { id: action.params.id })
            arr = _.remove(state, {
                id: index
            });
            console.log(arr)
            return arr;
        case 'EDIT_MESSAGE':
            var index = _.findIndex(state, { id: action.params.id })
            state.splice(index, 1, action.params);
            return state;
        default:
            return state;
    }
}