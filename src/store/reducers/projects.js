import initialProjects from "../../constants/initialProjects.json";

let initialProjectLS = localStorage.getItem("toDoCards");
let initialProject;
if (!initialProjectLS) {
  initialProject = initialProjects;
  localStorage.setItem("toDoCards", JSON.stringify(initialProjects));
} else initialProject = JSON.parse(initialProjectLS);

function setCardsToLS(cards) {
  localStorage.setItem("toDoCards", JSON.stringify(cards));
}

function lastIdHandler(arr) {
  return arr[arr.length - 1]?.id || 0;
}

const initialState = {
  projectsItems: initialProject,
  lastID: lastIdHandler(initialProject),
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    // добавить новый проект
    case "ADD_NEW_PROJECT": {
      action.payload.id = state.lastID + 1;
      const newItems = [...state.projectsItems, action.payload];
      setCardsToLS(newItems);
      return {
        ...state,
        projectsItems: newItems,
        lastID: lastIdHandler(newItems),
      };
    }

    // отредактировать название проекта
    case "EDIT_PROJECT": {
      const newItems = state.projectsItems.map((el) =>
        el.id === action.payload.id ? action.payload : { ...el }
      );
      setCardsToLS(newItems);
      return {
        ...state,
        cardsItems: newItems,
        lastID: lastIdHandler(newItems),
      };
    }

    // убрать проект
    case "REMOVE_PROJECT": {
      const newItems = state.projectsItems.filter(
        (el) => el.id !== action.payload.id
      );
      setCardsToLS(newItems);
      return {
        ...state,
        cardsItems: newItems,
        lastID: lastIdHandler(newItems),
      };
    }
    default:
      return state;
  }
};

export default projects;
