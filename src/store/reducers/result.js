import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        }
    }

    if (action.type === actionTypes.DELETE_RESULT) {
        const updatedResults = state.results.filter((result, index) => result.id !== action.resultId);
        return {
            ...state,
            results: updatedResults
        }
    }
    return state;
};

export default reducer;
