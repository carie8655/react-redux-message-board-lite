export const onInsertAction = (params) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'GOTOREDUCERS_ONINSERT', params
        })
    }
}
export const setPageAction = (params) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'SETPAGE', params
        })
    }
}
export const setUID = () => {
    return (dispatch) => {
        dispatch({
            type: 'SET_UID'
        })
    }
}
export const editMessage = (params) => {
    return (dispatch) => {
        dispatch({
            type: 'EDIT_MESSAGE', params
        })
    }
}
export const deleteMessage = (params) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_UID', params
        })
    }
}