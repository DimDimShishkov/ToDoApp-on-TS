import { CardType } from "../../utils/types/CardType";

function lastIdHandler(cards: CardType[]) {
  return cards[cards.length - 1]?.id;
}

const initialState = {
  currentProject: "",
  cardsItems: [] as CardType[],
  lastID: 0,
};

export const cardsReducer = (
  state = initialState,
  action: {
    type: string;
    payload: CardType;
  }
) => {
  function setCardsToLS(cards: CardType[]) {
    let newArr = JSON.parse(localStorage.getItem("toDoCards")).map(
      (project: { id: string }) =>
        project.id === state.currentProject
          ? { ...project, tasks: cards }
          : { ...project }
    );
    localStorage.setItem("toDoCards", JSON.stringify(newArr));
  }

  switch (action.type) {
    // установить текущий проект и карточки
    case "SET_CURRENT_PROJECT": {
      let initialItems = JSON.parse(localStorage.getItem("toDoCards"));
      const newCardsItems = initialItems
        ? initialItems.find(
            (project: {
              id: { startDate: string; section: string; id: number };
            }) => project.id === action.payload
          ).tasks
        : false;
      return {
        ...state,
        currentProject: action.payload,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }
    // добавить карточку
    case "ADD_NEW_CARD": {
      action.payload.startDate = new Date().getTime().toString();
      action.payload.section = "ToDo";
      action.payload.id = ++state.lastID;
      const newCardsItems = [...state.cardsItems, action.payload];
      setCardsToLS(newCardsItems);
      return {
        ...state,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }

    // отредактировать карточку
    case "EDIT_CARD": {
      const newCardsItems = state.cardsItems.map((el) =>
        el.id === action.payload.id ? action.payload : { ...el }
      );
      setCardsToLS(newCardsItems);
      return {
        ...state,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }

    // убрать карточку
    case "REMOVE_CARD": {
      const newCardsItems = state.cardsItems.filter(
        (el) => el.id !== action.payload.id
      );
      setCardsToLS(newCardsItems);
      return {
        ...state,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }
    default:
      return state;
  }
};
