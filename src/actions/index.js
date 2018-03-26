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