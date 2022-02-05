import { storageGet, storageSet } from './localStorageActions'

let nextCatId = storageGet('nextCatId') || 1;

export function makeCat(payload, id=null) {

   const currId = id ? id : nextCatId++;
   storageSet('nextCatId', nextCatId);
   return {
      id: currId,
      name: payload.name,
      color: payload.color,
   };
 }
