const setSelectedOption = option => {
    return {
      type: 'SET_SELECTED_OPTION',
      name: option
    };
  };
  
  const clearSelectedOption = () => {
    return {
      type: 'CLEAR_SELECTED_OPTION'
    };
  };
  
  export { setSelectedOption, clearSelectedOption };
  