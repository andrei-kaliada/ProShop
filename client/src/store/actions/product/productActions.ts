import { Dispatch } from 'redux';
import { $apiAxios } from '../../../api';
import {
  EProductType,
  failedProductActionType,
  fetchProductActionType,
  IProduct,
  successProductActionType,
} from '../../../types/product/IProduct';

export const getProduct = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchProductAction());
    const { data } = await $apiAxios.get('/products');
    dispatch(successProductAction(data));
  } catch (error) {
    dispatch(failedProductAction((error as Error).message));
  }
};

export const successProductAction = (
  product: IProduct[]
): successProductActionType => {
  return {
    type: EProductType.SUCCESS_FETCHING,
    payload: product,
  };
};

export const fetchProductAction = (): fetchProductActionType => {
  return {
    type: EProductType.FETCH_PRODUCTS,
  };
};

export const failedProductAction = (error: string): failedProductActionType => {
  return {
    type: EProductType.FAILED_FETCHING,
    payload: error,
  };
};
