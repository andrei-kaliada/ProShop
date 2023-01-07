import { combineReducers } from 'redux';
import { productDetailReducer } from './product/productDetailReducer';
import { productReducer } from './product/productReducers';

export const rootReducer = combineReducers({
  product: productReducer,
  productDetail: productDetailReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
