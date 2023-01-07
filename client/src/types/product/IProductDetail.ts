export enum EProductDetailType {
  FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT',
  SUCCESS_SINGLE_FETCHING = 'SUCCESS_SINGLE_FETCHING',
  FAILED_SINGLE_FETCHING = 'FAILED_SINGLE_FETCHING',
}

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface successProductDetailActionType {
  type: EProductDetailType.SUCCESS_SINGLE_FETCHING;
  payload: IProduct;
}

export interface fetchProductDetailActionType {
  type: EProductDetailType.FETCH_SINGLE_PRODUCT;
}

export interface failedProductDetailActionType {
  type: EProductDetailType.FAILED_SINGLE_FETCHING;
  payload: string;
}

export type ProductDetailActionTypes =
  | successProductDetailActionType
  | fetchProductDetailActionType
  | failedProductDetailActionType;
