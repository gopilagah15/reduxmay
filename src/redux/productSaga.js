import { put, takeEvery } from "redux-saga/effects";  
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant"; 
function* getProducts(){
       let data = yield fetch('http://localhost:5000/products');
       data = yield data.json();
       console.log('Action called', data) ;
       yield put({
        type:SET_PRODUCT_LIST, data
       })
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts)
}
export default productSaga;