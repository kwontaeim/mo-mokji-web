import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

Modal.setAppElement('#root');

const StyledModalContents = styled.div`
  color: #ffeed3;
  max-width: 30rem;
  outline: none;
  padding: 4.8rem;
  text-align: center;
`;

const StyledModalHeader = styled.h2`
  margin: 0 0 3.2rem 0;
`;

const StyledModalParagraph = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: #ffffff;
  margin: 0 0 3.2rem 0;
`;

const StyledButton = styled.button`
  background: #87a4c8;
  border: 0.1rem #3f6aae solid;
  border-radius: 1rem;
  font-weight: 600;
  color: #eeeae3;
  padding: 1rem 3rem;

  :hover {
    background: #3f6aae;
    cursor: pointer;
  }
`;

const DecisionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      style={{
        overlay: {},
        content: {
          maxWidth: '30rem',
          height: 'auto',
          margin: '10rem auto',
          background: '#db7093',
          top: 0,
          bottom: 0,
          left: '3rem',
          right: '3rem',
          padding: 0
        }
      }}
    >
      <StyledModalContents>
        <StyledModalHeader>오늘은..</StyledModalHeader>
        <StyledModalParagraph>
          {props.selectedOption} 먹자{' '}
          <span role="img" aria-label="pig">
            🐷
          </span>
        </StyledModalParagraph>
        <StyledButton onClick={props.handleClearSelectedItem}>
          꿀!
        </StyledButton>
      </StyledModalContents>
    </Modal>
  );
};

export default DecisionModal;
