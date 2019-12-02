import React from 'react';

import Option from './Option';

const OptionList = props => {
  return (
    <div>
      <div class="option-list margin">
      {props.items.map((item, index) => (
        <Option
        key={index}
        text={item}
        handleRemoveOption={props.handleRemoveOption}
        />
        ))}
      </div>
    </div>
  );
};

export default OptionList;
