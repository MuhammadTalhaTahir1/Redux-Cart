import { REMOVE_ITEM, ADD_ITEM, TOTAL_PRICE } from "../../Actions/ActionTypes";
const initialState = [{ totalPrice: 0 }];

const AddRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.payload];
    }
    case REMOVE_ITEM: {
      const deleteItem = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteItem;

      // const newState = [...state];
      // newState.splice(action.payload, 1);
      // return newState;
      // this is an different method of removing
    }

    default:
      return state;
  }
};

export default AddRemoveReducer;
