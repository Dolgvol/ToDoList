

export function storeController(state, setState, makeItem) {
   return {
      createItem(payload) {
         setState([...state, makeItem(payload)])
      },
      editItem(id, payload) {
         setState(  state.map(item => {
               if (item.id === Number(id)) {
                  return makeItem({...item, ...payload}, id);
               }               
               return item;
            })
         )
      }, 
      deleteItem(id) {
         setState( state.filter(item => item.id !== Number(id)))
      },
      // only for notes
      deleteGroupNotes(categoryId) {
         setState( state.filter(item => item?.categoryId !== Number(categoryId)))
      }
   }
}


export function rebuildNotes(notes) {
   const inputArray = notes;
   const objOfArrays = {};

   inputArray.forEach((object) => {
      if (objOfArrays.hasOwnProperty(object.category)) {
         objOfArrays[object.category].push(object);
      } else {
         objOfArrays[object.category] = [object];
      }
   });
   return objOfArrays;
}
