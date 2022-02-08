export const initialState={
    openState: false
}
export const reducer=(state, action)=>{
    switch(action.type){
        case 'ChangePage':
            return{ ...state, openState: action.payload}
        default:
            return state;
    }
}