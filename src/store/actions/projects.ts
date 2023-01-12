import { ProjectType } from "../../utils/types/ProjectType";

export const addNewProject = (project: ProjectType) => ({
  type: "ADD_NEW_PROJECT",
  payload: project,
});

export const editProject = (project: ProjectType) => ({
  type: "EDIT_PROJECT",
  payload: project,
});

export const removeProject = (project: ProjectType) => ({
  type: "REMOVE_PROJECT",
  payload: project,
});
