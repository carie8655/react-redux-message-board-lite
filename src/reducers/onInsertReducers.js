import _ from 'lodash';

export default (state = [], action) => {

    switch (action.type) {
        case 'GOTOREDUCERS_ONINSERT':
            var arr = _.concat(state, action.params);
            return arr;
        default:
            return state;
    }
}