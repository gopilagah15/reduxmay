export const addToCart =(data)=>{
    console.log('action Add_To_Cart is called',data);
    return {
        type: 'Add_To_Cart',
        // type: Add_To_Cart,
        data
    }
}
export const RemoveToCart =(data)=>{
    console.log('action Remove_To_Cart is called',data);
    return {
        type: 'Remove_To_Cart',
        data
    }
}
export const EmptyCart =(data)=>{
    console.log('action Empty_Cart is called');
    return {
        type: 'Empty_Cart',
        data
    }
}