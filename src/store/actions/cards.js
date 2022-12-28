export const addNewCard = (card) => ({
  type: "ADD_NEW_CARD",
  payload: card,
});

export const editCard = (card) => ({
  type: "EDIT_CARD",
  payload: card,
});

export const removeCard = (card) => ({
  type: "REMOVE_CARD",
  payload: card,
});

export const setCurrentProject = (project) => ({
  type: "SET_CURRENT_PROJECT",
  payload: project,
});
