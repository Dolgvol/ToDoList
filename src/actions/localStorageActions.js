
export function storageGet(localStorageName) {
   if (localStorage[localStorageName]) {
       return JSON.parse(localStorage[localStorageName]);
   } 
 }
 
export function storageSet(localStorageName, state) {
   if (typeof state === 'object' && state !== null) {
      localStorage.setItem(localStorageName, JSON.stringify(state));
   }
}