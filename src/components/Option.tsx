import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import ButtonLink from './ButtonLink';
import { removeOption } from '../actions/options';

const StyledOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 0.1em solid #7794b8;
  color: #ffeed3;
`;

const Option = (props: any) => {
  return (
    <StyledOption>
      {props.text}{' '}
      <ButtonLink onClick={e => props.removeOption(props.text)}>
        삭제
      </ButtonLink>
    </StyledOption>
  );
};

const mapStateToProps = (state: any) => {
  return {
    option : state.option
  }
}

const mapDispatchToProps = {
  removeOption
};

export default connect(mapStateToProps, mapDispatchToProps)(Option);
