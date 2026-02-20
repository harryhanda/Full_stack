export const initialState = {
  wishlist: []
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };

    case "REMOVE_PLACE":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          item => item.name !== action.payload
        )
      };

    case "CLEAR_WISHLIST":
      return {
        ...state,
        wishlist: []
      };

    default:
      return state;
  }
};