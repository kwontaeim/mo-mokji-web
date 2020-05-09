const addOption = (optionName: string) => {
    return {
        type: 'ADD_ITEM',
        data: optionName
    }
} 

const removeOption = (optionName: string) => {
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