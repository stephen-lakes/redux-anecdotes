const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_FILTER":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (keyword) => {
  return {
    type: "SET_FILTER",
    payload: keyword,
  };
};

export default filterReducer;
