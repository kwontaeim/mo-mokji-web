import React from 'react';

const AddOption = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const newOption = event.target.elements.option.value.trim();

    props.addNewOption(newOption);
    event.target.elements.option.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="option" />
      <button>추가</button>
    </form>
  );
};

export default AddOption;
