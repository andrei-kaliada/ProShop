import {
  EProductDetailType,
  IProduct,
} from '../../../types/product/IProductDetail';
import { ProductDetailActionTypes } from '../../../types/product/IProductDetail';

interface IInitialState {
  product: IProduct;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  product: {} as IProduct,
  isLoading: false,
  error: '',
};

export const productDetailReducer = (
  state = initialState,
  action: ProductDetailActionTypes
): IInitialState => {
  switch (action.type) {
    case EProductDetailType.FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case EProductDetailType.SUCCESS_SINGLE_FETCHING:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case EProductDetailType.FAILED_SINGLE_FETCHING:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
