import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #352e73;
  border: none;
  border-bottom: .6rem solid black; /* TODO */
  color: #eeeae3;
  font-weight: bold;
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
  padding: 2.4rem;
  width: 100%;

  :disabled {
    opacity: 0.5;
  }
`;

const Action = (props: any) => {
  return (
    <div>
      <StyledButton disabled={!props.hasOptions} onClick={props.handlePick}>
        정해줘
      </StyledButton>
    </div>
  );
};

export default Action;
