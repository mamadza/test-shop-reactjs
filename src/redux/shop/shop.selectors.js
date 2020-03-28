import { createSelector } from 'reselect';


const selectShop = state => state.shop;
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)


const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens:4, 
    mans: 5
}

export const selectCollection = collectionUrlParam => 
 createSelector(
     [selectCollections],
     collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
 )