import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";


export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return dispatch => {
        //the set timeout is used to mimic an actual server call
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    };
};


export const deleteResult = (resultId) => {
    return {
        type: DELETE_RESULT,
        resultId: resultId
    };
};
