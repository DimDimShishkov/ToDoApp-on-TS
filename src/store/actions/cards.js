export const addNewCard = (item) => ({
  type: "ADD_NEW_CARD",
  payload: item,
});

export const editCard = (item) => ({
  type: "EDIT_CARD",
  payload: item,
});

export const removeCard = (item) => ({
  type: "REMOVE_CARD",
  payload: item,
});

/* export const setCartItems = (item) => ({
  type: "SET_CART_ITEMS",
  payload: item,
}); */
