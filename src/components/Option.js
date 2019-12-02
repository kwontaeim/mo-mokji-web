import React from 'react';

const Option = props => {
  return (
    <div class="option">
      <span>{props.text}{' '}</span>
      <span class="remove" onClick={e => props.handleRemoveOption(props.text)}>X</span>
    </div>
  );
};

export default Option;
