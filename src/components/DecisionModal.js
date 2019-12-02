import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DecisionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      style={{
        overlay: {backgroundColor: 'rgba(0,0,0,0)'},
        content: {
          backgroundColor: 'rgba(0,0,0,0)',
          border: 'none',
          maxWidth: '30rem',
          height: '12rem',
          margin: '12rem auto',
          top: 0,
          bottom: 0,
          left: '3rem',
          right: '3rem',
          padding: 0,
          textAlign: 'center'
        }
      }}
    >
      <p class="decision">
        <strong>{props.selectedOption}</strong> 먹자!{' '}
        <span role="img" aria-label="pig">
          
        </span>
      </p>
      <button class="btn btn-default btn-xs" onClick={props.handleClearSelectedItem}>좋아</button>
    </Modal>
  );
};

export default DecisionModal;
