export const cartData=(data=[],action)=>{ 
switch(action.type){
    case 'Add_To_Cart':
        console.log('ADD_TO_CART condition',action);
        return [action.data,...data]
    case 'Remove_To_Cart':
        console.log('Remove_To_Cart condition',action); 
        data.length = data.length ? data.length-1:[];
        return [...data]
    case 'Empty_Cart':
        console.log('Empty_Cart condition',action);
         data=[]
         return [...data]
        default:
            return data
}
}