const initialState = {
  cardsItems: [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    // добавить карточку
    case "ADD_NEW_CARD": {
      console.log(state);
      return {
        ...state,
        cardItems: action.payload,
      };
    }

    // убрать карточку
    case "REMOVE_CARD": {
      const newCardsItems = state.cardsItems.filter(
        (el) => el.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: newCardsItems,
      };
    }
    default:
      return state;
  }
};

export default cards;
