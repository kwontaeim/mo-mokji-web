const selectedOptionReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_SELECTED_OPTION':
        return action.name;
      case 'CLEAR_SELECTED_OPTION':
        return null;
      default:
        return state;
    }
  };
  
  export default selectedOptionReducer;
  