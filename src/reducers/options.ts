const optionsReducer = (state: any = ['치킨', '피자'], action: any) => {
    switch(action.type) {
        case 'ADD_ITEM':
        return [...state, action.data];
        case 'REMOVE_ITEM':
        return state.filter((option: string) => option !== action.data);
        case 'REMOVE_ALL_ITEMS':
        return [];
        default :
        return state;
    }
};

export default optionsReducer;