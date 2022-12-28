let initialItems = JSON.parse(localStorage.getItem("toDoCards"));

function lastIdHandler(arr) {
  return arr[arr.length - 1]?.id;
}

const initialState = {
  currentProject: "",
  cardsItems: [],
  lastID: 0,
};

const cards = (state = initialState, action) => {
  function setCardsToLS(cards) {
    let newArr = JSON.parse(localStorage.getItem("toDoCards")).map((project) =>
      project.id === state.currentProject
        ? { ...project, tasks: cards }
        : { ...project }
    );
    localStorage.setItem("toDoCards", JSON.stringify(newArr));
  }

  switch (action.type) {
    // установить текущий проект и карточки
    case "SET_CURRENT_PROJECT": {
      const newCardsItems = initialItems.find(
        (project) => project.id === action.payload
      ).tasks;
      return {
        ...state,
        currentProject: action.payload,
        cardsItems: newCardsItems,
        lastID: lastIdHandler(newCardsItems),
      };
    }
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

export default cards;
