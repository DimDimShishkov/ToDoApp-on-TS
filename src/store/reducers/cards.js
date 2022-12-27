let initialCards = JSON.parse(localStorage.getItem("toDoCards")) || [];

function setCardsToLS(cards) {
  localStorage.setItem("toDoCards", JSON.stringify(cards));
}

function lastIdHandler(arr) {
  return arr[arr.length - 1]?.id || 0;
}

const initialState = {
  cardsItems: initialCards,
  lastID: lastIdHandler(initialCards),
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    // добавить карточку
    case "ADD_NEW_CARD": {
      action.payload.startDate = new Date().getTime();
      action.payload.section = "ToDo";
      action.payload.id = state.lastID + 1;
      const newCardsItems = [...state.cardsItems, action.payload];
      setCardsToLS(newCardsItems);
      return {
        ...state,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }

    // отрдактировать карточку
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

export default cards;
