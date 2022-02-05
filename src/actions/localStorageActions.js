
export function storageGet(localStorageName) {
   if (localStorage[localStorageName]) {
       return JSON.parse(localStorage[localStorageName]);
   } 
 }
 
export function storageSet(localStorageName, state) {
   if ( (typeof state === 'object' || typeof state === 'number') && state !== null) {
      localStorage.setItem(localStorageName, JSON.stringify(state));
   }
}


// const useLocalStoredState = (defaultState, localStorageName) => {
//    let inputJson
//    try {
//      inputJson = JSON.parse(localStorage.getItem(localStorageName))
//    } catch(err) {
//      console.log(err)
//      localStorage.removeItem(localStorageName)
//    }
//    const [state, setState] = useState(inputJson || defaultState) 
//    return [state, newState => {
//      setState(newState)
//      localStorage.setItem(localStorageName, JSON.stringify(newState))
//    }]  
//  }