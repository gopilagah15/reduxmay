import { PRODUCT_LIST } from "./constant"

export const productList =  () => {
    // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // data = await data.json();
    // console.log('Action called', data) 
    return {
        type: PRODUCT_LIST,
        data:'apple'
    }
}