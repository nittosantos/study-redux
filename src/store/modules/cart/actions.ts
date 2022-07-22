import { IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

export function addProductToCartSucces(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCES",
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: Number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId,
    },
  };
}
