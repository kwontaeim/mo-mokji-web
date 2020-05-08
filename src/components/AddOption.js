import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import { addOption } from '../actions/options';

const StyledForm = styled.form`
  background: #87a4c8;
  color: #eeeae3;
  display: flex;
  padding: 0.5em;
`;

const StyledInput = styled.input`
  background: #eeeae3;
  color: #352e73;
  border: none;
  border-radius: 0.5em;
  border-bottom: 0.1rem solid #2f5a9e;
  flex-grow: 1;
  padding: 0.5em;
  margin-right: 0.5em;
`;

const StyledButton = styled.button`
  background: #352e73;
  color: #eeeae3;
  border: none;
`;

const AddOption = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const newOption = event.target.elements.option.value.trim();

    props.addOption(newOption);
    event.target.elements.option.value = '';
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" name="option" />
      <StyledButton>추가</StyledButton>
    </StyledForm>
  );
};

const mapDispatchToProps = {
  addOption
};

export default connect(null, mapDispatchToProps)(AddOption);
