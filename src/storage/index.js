import {makeNote} from '../helpers/makeItem';
import {makeCat} from '../helpers/makeCat';


const initialNotes = [
   {
      status: 'added',
      categoryId: 1,
      created : '20.12.2021',
      name: 'Go To Work',
      endpoint: ''
   },
   {
      status: 'inProgress',
      categoryId: 2,
      created : '21.12.2021',
      name: 'Visit dentist',
      endpoint: '21.12.2022'
   },
   {
      status: 'added',
      categoryId: 3,
      created : '19.12.2021',
      name: 'Buy bluetooth adapter',
      endpoint: ''
   },
   {
      status: 'done',
      categoryId: 1,
      created : '18.12.2021',
      name: 'Fix app problem',
      endpoint: ''
   },

   {
      status: 'inProgress',
      categoryId: 2,
      created : '01.12.2021',
      name: 'Write shopping list',
      endpoint: ''
   },
   {
      status: 'done',
      categoryId: 3,
      created : '05.12.2021',
      name: 'Read book',
      endpoint: '30.12.2021'
   },
   {
      status: 'inProgress',
      categoryId: 1,
      created : '03.12.2021',
      name: 'Implement new features',
      endpoint: '03.12.2022'
   },
];


const initialCats = [
   {
      name: 'Work',
      color: '#0d6efd',
   },
   {
      name: 'Home',
      color: '#6610f2',
   },
   {
      name: 'Hobby',
      color: '#d63384',
   },
];



// export const state = {
//    itemsCats: [],
//    itemsNotes: [],
//    currFilter: {
//       added: true,
//       inProgress: true,
//       done: false
//    },
//    get selectedNotes() {
//       let selectedItems = []
//       if (this.currFilter.added) {
//          selectedItems = [...selectedItems, ...this.itemsNotes.filter((note) => 
//             note.status === 'added')]
//       }
//       if (this.currFilter.inProgress) {
//          selectedItems = [...selectedItems, ...this.itemsNotes.filter((note) => 
//             note.status === 'inProgress')]
//       }
//       if (this.currFilter.done) {
//          selectedItems = [...selectedItems, ...this.itemsNotes.filter((note) => 
//             note.status === 'done')]
//       }
//       return selectedItems
//    }
// }

export function createInitialCats() {
   return initialCats.map((itemCat) => 
      makeCat(itemCat)
   );
}
export function createInitialNotes() {
   return initialNotes.map((itemNote) => 
      makeNote(itemNote)
   );
}


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
      }
   }
}


// export function notesController(notes, setNotes) {
//    return {
//       createItem(payload) {
//         setNotes([...notes, makeNote(payload)])
//       },
//       editItem(id, payload) {
//          setNotes(  notes.map(note => {
//             if (note.id === Number(id)) {
//                return makeNote({...note, ...payload}, id);
//             }
//             return note;
//             })
//          )
//       }, 
//       deleteItem(id) {
//          setNotes( notes.filter(note => note.id !== Number(id)))
//       }
//    }
// }




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
