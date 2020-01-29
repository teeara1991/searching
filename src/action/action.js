export const STORE_GENERATOR = "STORE_GENERATOR";
export const CHANGE_TAG = "CHANGE_TAG";
export const CHANGE_FOLDER = "CHANGE_FOLDER";

export const storeGeneraror = data => ({
  type: STORE_GENERATOR,
  payload: data
});
export const changeTag = data => ({
  type: CHANGE_TAG,
  payload: data
});
export const changeFolder = id => ({
  type: CHANGE_FOLDER,
  payload: id
});
