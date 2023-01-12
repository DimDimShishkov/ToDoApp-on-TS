import initialProjects from "../../utils/initialProjects.json";
import { ProjectType } from "../../utils/types/ProjectType";

let initialProjectLS = localStorage.getItem("toDoCards");
let initialProject;
if (!initialProjectLS) {
  initialProject = initialProjects;
  localStorage.setItem("toDoCards", JSON.stringify(initialProjects));
} else initialProject = JSON.parse(initialProjectLS);

function setProjectsToLS(projects: ProjectType[]) {
  localStorage.setItem("toDoCards", JSON.stringify(projects));
}

function lastIdHandler(projects: ProjectType[]) {
  return projects[projects.length - 1]?.id || 0;
}

const initialState = {
  projectsItems: initialProject,
  lastID: lastIdHandler(initialProject),
};

export const projectsReducer = (
  state = initialState,
  action: { type: string; payload: ProjectType }
) => {
  switch (action.type) {
    // добавить новый проект
    case "ADD_NEW_PROJECT": {
      action.payload.id = state.lastID + 1;
      const newItems: ProjectType[] = [...state.projectsItems, action.payload];
      setProjectsToLS(newItems);
      return {
        ...state,
        projectsItems: newItems,
        lastID: lastIdHandler(newItems),
      };
    }

    // отредактировать название проекта
    case "EDIT_PROJECT": {
      const newItems: ProjectType[] = state.projectsItems.map(
        (project: ProjectType) =>
          project.id === action.payload.id ? action.payload : { ...project }
      );
      setProjectsToLS(newItems);
      return {
        ...state,
        cardsItems: newItems,
        lastID: lastIdHandler(newItems),
      };
    }

    // убрать проект
    case "REMOVE_PROJECT": {
      const newItems: ProjectType[] = state.projectsItems.filter(
        (project: ProjectType) => project.id !== action.payload.id
      );
      setProjectsToLS(newItems);
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
