import React, {useContext}  from 'react';
import {UserContext, ChannelContext} from '../App';

const Option = props => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div class="option">
      <span>'{user}'이는 '{channel}'에서 {props.text}{' '} 먹고싶다!</span>
      <span class="remove" onClick={e => props.handleRemoveOption(props.text)}>X</span>
    </div>
  );
};

export default Option;
