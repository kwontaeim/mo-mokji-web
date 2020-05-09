import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import ButtonLink from './ButtonLink';
import Option from './Option';

import { removeAllOptions } from '../actions/options';

const OptionListHeader = styled.div`
  background: #3f6aae;
  color: #eeeae3;
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;

const OptionListHeaderTitle = styled.h3`
  margin: 0;
  padding: 0;
`;

const OptionsTable = styled.div`
  background: #87a4c8;
  color: #eeeae3;
`;

const OptionList = (props: any) => {
  return (
    <div>
      <OptionListHeader>
        <OptionListHeaderTitle>먹방 리스트</OptionListHeaderTitle>
        <ButtonLink onClick={props.removeAllOptions}>
          나 이제 배불러
        </ButtonLink>
      </OptionListHeader>
      <OptionsTable>
        {props.options.map((item: string, index: string) => (
          <Option
            key={index}
            text={item}
          />
        ))}
      </OptionsTable>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    options : state.options
  }
}

const mapDispatchToProps = {
  removeAllOptions
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionList);
