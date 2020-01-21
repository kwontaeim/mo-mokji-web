import React, { useEffect, useState } from 'react';

import Header from './Header';
import Action from './Action';
import OptionList from './OptionList';
import AddOption from './AddOption';
import DecisionModal from './DecisionModal';
import RemoveAllOptions from './RemoveAllOptions';

const Mo_mokji = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    let storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    console.log('items being stored');
  }, [items]);

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
    <div class="background"></div>
      <div class="content">
        <Header />
        <OptionList
          handleRemoveOption={removeItem}
          items={items}
        />
        <AddOption addNewOption={addNewItem} />
        <DecisionModal
          selectedOption={selectedItem}
          handleClearSelectedItem={clearSelectedItem}
          />
        <div class="button-align margin">
        <RemoveAllOptions
          handleRemoveAllOptions={removeAllItems}
          />
        <Action hasOptions={items.length > 0} handlePick={handlePick} />
          </div>
      </div>
    </div>
  );
};

export default Mo_mokji;