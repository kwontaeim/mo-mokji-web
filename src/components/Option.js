import React from 'react';

const Option = props => {
  return (
    <div>
      {props.text}{' '}
      <button onClick={e => props.handleRemoveOption(props.text)}>삭제</button>
    </div>
  );
};

export default Option;
