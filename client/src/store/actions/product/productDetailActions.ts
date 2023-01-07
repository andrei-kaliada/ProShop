import { Dispatch } from 'redux';
import { $apiAxios } from '../../../api';
import {
  EProductDetailType,
  failedProductDetailActionType,
  fetchProductDetailActionType,
  IProduct,
  successProductDetailActionType,
} from '../../../types/product/IProductDetail';

export const getProductById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchProductDetailAction());
    const { data } = await $apiAxios.get(`/products/${id}`);
    dispatch(successProductDetailAction(data));
  } catch (error) {
    dispatch(failedProductDetailAction((error as Error).message));
  }
};

export const successProductDetailAction = (
  product: IProduct
): successProductDetailActionType => {
  return {
    type: EProductDetailType.SUCCESS_SINGLE_FETCHING,
    payload: product,
  };
};

export const fetchProductDetailAction = (): fetchProductDetailActionType => {
  return {
    type: EProductDetailType.FETCH_SINGLE_PRODUCT,
  };
};

export const failedProductDetailAction = (
  error: string
): failedProductDetailActionType => {
  return {
    type: EProductDetailType.FAILED_SINGLE_FETCHING,
    payload: error,
  };
};
