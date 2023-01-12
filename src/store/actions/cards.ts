import { CardType } from "../../utils/types/CardType";
import { ProjectType } from "../../utils/types/ProjectType";

export const addNewCard = (card: CardType) => ({
  type: "ADD_NEW_CARD",
  payload: card,
});

export const editCard = (card: CardType) => ({
  type: "EDIT_CARD",
  payload: card,
});

export const removeCard = (card: CardType) => ({
  type: "REMOVE_CARD",
  payload: card,
});

export const setCurrentProject = (project: ProjectType) => ({
  type: "SET_CURRENT_PROJECT",
  payload: project,
});
