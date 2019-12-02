import React from 'react';

const RemoveAllOptions = props => {
  return (
    <div>
        <button class="btn btn-default btn-xs" onClick={props.handleRemoveAllOptions}>나 이제 배불러</button>
    </div>
  );
};

export default RemoveAllOptions;
