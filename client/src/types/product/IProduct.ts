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

export enum EProductType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  SUCCESS_FETCHING = 'SUCCESS_FETCHING',
  FAILED_FETCHING = 'FAILED_FETCHING',
  SINGLE_PRODUCT = 'SINGLE_PRODUCT',
}

export interface successProductActionType {
  type: EProductType.SUCCESS_FETCHING;
  payload: IProduct[];
}

export interface fetchProductActionType {
  type: EProductType.FETCH_PRODUCTS;
}

export interface failedProductActionType {
  type: EProductType.FAILED_FETCHING;
  payload: string;
}

export interface addSingleProductActionType {
  type: EProductType.SINGLE_PRODUCT;
  payload: IProduct;
}

export type ProductActionTypes =
  | successProductActionType
  | fetchProductActionType
  | failedProductActionType
  | addSingleProductActionType;
