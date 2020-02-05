import { cloneDeep } from 'lodash';

export const filterCollections = (collections, keyword) => {
  const collectionsArr = cloneDeep(collections);

  const filterItems = (arr) =>
    arr.filter((item) => item.name.toLowerCase().includes(keyword));

  const searchFilter = () => {
    collectionsArr.forEach((collection) => {
      collection.items = filterItems(collection.items);
    });
    return collectionsArr;
  };
  return searchFilter();
};
