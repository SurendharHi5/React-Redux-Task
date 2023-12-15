// Actions Types
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const UPDATE_PRICE = 'UPDATE_PRICE';

// Action Creators

export const increaseQuantity = id=> ({ type: INCREASE_QUANTITY, payload: id });
export const decreaseQuantity = id=> ({ type: DECREASE_QUANTITY, payload: id });
export const updatePrice = id=> ({ type: UPDATE_PRICE, payload: id });