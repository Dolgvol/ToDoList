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