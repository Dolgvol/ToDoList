import {makeNote} from '../actions/makeItem';
import {makeCat} from '../actions/makeCat';


const initialNotes = [
   {
      status: 'done',
      categoryId: 1,
      created : '1.12.2021',
      name: 'Go To Work',
      endpoint: '',
      doneDate: '5.12.2021'
   },
   {
      status: 'done',
      categoryId: 2,
      created : '3.12.2021',
      name: 'Visit dentist',
      endpoint: '03.12.2022',
      doneDate: '7.12.2021'
   },
   {
      status: 'done',
      categoryId: 3,
      created : '5.12.2021',
      name: 'Buy bluetooth adapter',
      endpoint: '',
      doneDate: '10.12.2021'
   },
   {
      status: 'done',
      categoryId: 1,
      created : '10.12.2021',
      name: 'Fix app problem',
      endpoint: '',
      doneDate: '15.12.2021'
   },

   {
      status: 'done',
      categoryId: 2,
      created : '22.12.2021',
      name: 'Write shopping list',
      endpoint: '',
      doneDate: '25.12.2021'
   },
   {
      status: 'done',
      categoryId: 3,
      created : '24.12.2021',
      name: 'Read book',
      endpoint: '24.12.2021',
      doneDate: '31.12.2021'
   },
   {
      status: 'done',
      categoryId: 1,
      created : '27.12.2021',
      name: 'Implement new features',
      endpoint: '27.12.2022',
      doneDate: '30.12.2021'
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
      makeCat(itemCat, itemCat.id)
   );
}
export function createInitialNotes() {
   return initialNotes.map((itemNote) => 
      makeNote(itemNote, itemNote.id)
   );
}