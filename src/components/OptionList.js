import React from 'react';

import Option from './Option';

const OptionList = props => {
  return (
    <div>
      <button onClick={props.handleRemoveAllOptions}>나 이제 배불러</button>
      {props.items.map((item, index) => (
        <Option
          key={index}
          text={item}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  );
};

export default OptionList;
