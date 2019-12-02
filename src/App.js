import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Action from './components/Action';
import OptionList from './components/OptionList';
import AddOption from './components/AddOption';
import DecisionModal from './components/DecisionModal';

const App = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    let storedItems = JSON.parse(localStorage.getItem('items'));
    if(storedItems) {
      setItems(storedItems)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log('items being stored');
  }, [items])

  const handlePick = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  const clearSelectedItem = () => {
    setSelectedItem(undefined);
  };

  const addNewItem = newItem => {
    if (newItem && !items.includes(newItem)) {
      setItems(items.concat(newItem));
    }
  };

  const removeItem = itemToRemove => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  const removeAllItems = () => {
    setItems([]);
  };

  return (
    <div>
      <Header />
      <Action hasOptions={items.length > 0} handlePick={handlePick} />
      <OptionList
        handleRemoveAllOptions={removeAllItems}
        handleRemoveOption={removeItem}
        items={items}
      />
      <AddOption addNewOption={addNewItem} />
      <DecisionModal
        selectedOption={selectedItem}
        handleClearSelectedItem={clearSelectedItem}
      />
    </div>
  );
};

export default App;
