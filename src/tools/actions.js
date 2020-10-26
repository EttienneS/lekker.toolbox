export const CREATE_TOOL = "CREATE_TOOL";
export const createTool = (name) => ({
  type: CREATE_TOOL,
  payload: { name: name },
});

export const REMOVE_TOOL = "REMOVE_TOOL";
export const removeTool = (name) => ({
  type: REMOVE_TOOL,
  payload: { name: name },
});

export const TOGGLE_FAVOURITE_TOOL = "TOGGLE_FAVOURITE_TOOL";
export const toggleFavouriteTool = (name) => ({
  type: TOGGLE_FAVOURITE_TOOL,
  payload: { name: name },
});
