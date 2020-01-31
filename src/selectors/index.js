import { createSelector } from "reselect";

const getSubfoldersId = (array, id) => {
  function func(array) {
    return array.reduce(function(r, a) {
      r.push({ id: a.id, name: a.name, subfolders: a.subfolders });
      if (a.subfolders && Array.isArray(a.subfolders)) {
        r = r.concat(func(a.subfolders));
      }
      return r;
    }, []);
  }
  return func(func(array).filter(folder => folder.id === id)).map(
    folder => folder.id
  );
};
const getImagesById = store => {
  const { folderId, images, folders } = store;
  return folderId === -1
    ? images
    : images.filter(image =>
        getSubfoldersId(folders, folderId).includes(image.folderId)
      );
};
const curTag = store => store.curTag;

export const getFilteredImages = createSelector(
  [getImagesById, curTag],
  (images, curTag) => {
    return images.filter(
      image => new RegExp(curTag, "g").test(image.tags.join(" ")) === true
    );
  }
);
