import {
  EProductType,
  IProduct,
  ProductActionTypes,
} from '../../../types/product/IProduct';

interface IInitialState {
  product: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  product: [],
  isLoading: false,
  error: '',
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes
): IInitialState => {
  switch (action.type) {
    case EProductType.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case EProductType.SUCCESS_FETCHING:
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      };
    case EProductType.FAILED_FETCHING:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
