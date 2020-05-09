import React, { useState } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import CentreContainer from './components/CentreContainer';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = (props: any) => {
  const [items, setItems] = useState(['']);
  const [selectedItem, setSelectedItem] = useState();

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * props.options.length);
    setSelectedItem(props.options[randomIndex]);
  };

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  return (
    <div>
      <Header />
      <CentreContainer>
        <Action hasOptions={props.options.length > 0} handlePick={handlePick} />
        <OptionList/>
        <AddOption/>
        <DecisionModal
          selectedOption={selectedItem}
          handleClearSelectedItem={clearSelectedItem}
        />
      </CentreContainer>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    options : state.options
  }
}

export default connect(mapStateToProps)(App);
