
export function getSelectedNotes(notes, currFilter) {
   if (notes) {
     let selectedItems = [];
     if (currFilter.added) {
           selectedItems.push(...notes.filter((note) => 
             note.status === 'added'));
     }
     if (currFilter.inProgress) {
         selectedItems.push(...notes.filter((note) => 
           note.status === 'inProgress'));
     }
     if (currFilter.done) {
       selectedItems.push(...notes.filter((note) => 
         note.status === 'done'));
     }
     return selectedItems.sort((a, b) => {
       if (a.id > b.id) {
         return -1
       }
       if (a.id < b.id) {
         return 1
       }
       return 0
     });
   }
}