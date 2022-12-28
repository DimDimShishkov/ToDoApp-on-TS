export const addNewProject = (project) => ({
  type: "ADD_NEW_PROJECT",
  payload: project,
});

export const editProject = (project) => ({
  type: "EDIT_PROJECT",
  payload: project,
});

export const removeProject = (project) => ({
  type: "REMOVE_PROJECT",
  payload: project,
});

/* export const setCartItems = (item) => ({
  type: "SET_CART_ITEMS",
  payload: item,
}); */
