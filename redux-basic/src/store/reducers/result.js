import * as actionTypes from '../actions/actionTypes';
const initialState = {
  results: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.value }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedResult = state.results.filter(
        (result) => result.id !== action.resultId
      );
      return {
        ...state,
        results: updatedResult,
      };
  }
  return state;
};
export default reducer;
