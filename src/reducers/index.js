import { STORE_GENERATOR, CHANGE_TAG, CHANGE_FOLDER } from "../action/action";

const initialState = {
  images: [],
  folders: [],
  folderId: "",
  curTag: ""
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case STORE_GENERATOR:
      return {
        ...state,
        images: action.payload.images,
        folders: action.payload.folders
      };
    case CHANGE_TAG:
      return {
        ...state,
        curTag: action.payload
      };
    case CHANGE_FOLDER:
      return {
        ...state,
        folderId: action.payload
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
