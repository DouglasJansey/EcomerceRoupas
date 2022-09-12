/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
const initialState = {
  quantity: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const newState = { ...state };
      newState.quantity += 1;
      console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default reducer;
