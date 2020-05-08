const addOption = (optionName) => {
    return {
        type: 'ADD_ITEM',
        data: optionName
    }
} 

const removeOption = (optionName) => {
    return {
        type: 'REMOVE_ITEM',
        data: optionName
    };
};

const removeAllOptions = () => {
    return {
        type: 'REMOVE_ALL_ITEMS'
    };
};

export { removeAllOptions, removeOption, addOption };