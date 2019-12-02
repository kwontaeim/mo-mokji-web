import React from 'react';

const Action = props => {
  return (
    <div>
      <button class="btn btn-default btn-xs" disabled={!props.hasOptions} onClick={props.handlePick}>
        정해줘
      </button>
    </div>
  );
};

export default Action;
