import React from 'react';
import styled from 'styled-components';

import CentreContainer from './CentreContainer';

const StyledHeader = styled.div`
  background: #db7093;
  color: #ffffff;
  margin-bottom: 4.8rem;
  padding: 1.6rem 0;
`;

const StyledTitle = styled.h1`
  /* color: #ffeed3; */
  margin: 0 0 0.5rem;
`;

const StyledSubtitle = styled.h4`
  color: #ffeed3;
  font-style: italic;
  margin: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <CentreContainer>
        <StyledTitle>
          뭐 먹지?{' '}
          <span role="img" aria-label="pig">
            🐷
          </span>
        </StyledTitle>

        <StyledSubtitle>먹고 싶은 것만 많은 그대를 위해</StyledSubtitle>
      </CentreContainer>
    </StyledHeader>
  );
};

export default Header;
