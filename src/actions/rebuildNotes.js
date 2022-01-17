import {getCurrentDate} from './makeItem'

export function rebuildNotesByCats(notes, cats) {
   const inputNotes = notes;
   const inputCats = cats;
   const notesByCats = {};

   inputNotes.forEach((note) => {

      for (const cat of inputCats) {
         if (cat.id === note.categoryId) {

            if (notesByCats.hasOwnProperty(cat.name)) {

               if(notesByCats[cat.name].hasOwnProperty(note.status)) {

                  notesByCats[cat.name][note.status].push(note);
               } else {
                  notesByCats[cat.name][note.status] = [note];
               }  
                
            } else {
               notesByCats[cat.name] = {[note.status]: [note]};                  
            }
         }
      }
   });
   return notesByCats;
}


// получаем массив даат в стандартном формате от start до end (new Date())
function getDaysArray(start, end) {
   let arr = [];
   for(let dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)) {
       arr.push(new Date(dt));
   }
   return arr;
}

export function rebuildNotesByDates(notes) {
// сортируем заметки по ид (дате создания), 
// выбираем дату самой первой заметки 
   const inputNotes = notes.sort((a, b) => {
      if (a.id > b.id) {
        return 1
      }
      if (a.id < b.id) {
        return -1
      }
      return 0
   });
   
   const start = inputNotes[0].created.split('.').reverse().join('-');
   // const end = inputNotes[inputNotes.length - 1].created.split('.').reverse().join('-');

   // получаем массив всех дат от первой заметки до сегодня в моем формате
   // получаем связанный массив дней недели в формате 0-пн, 6-вс
   const initList = getDaysArray(new Date(start), new Date());
   const dateList =  initList.map((date)=> getCurrentDate(date));
   const weekDayList = initList.map((date)=> {
         if (getCurrentDate(date, true) === 0) {
            return 6
         } else {
            return getCurrentDate(date, true) - 1
         }
   });

   // получаем объект в котором ключ - дата когда поставлен done
   // значение - массив заметок у которых был done за этот день
   const notesByDoneDates = {};
   for (const note of inputNotes) {
      if (note.status === 'done' && note.doneDate) {

         if (notesByDoneDates.hasOwnProperty(note.doneDate)) {

            notesByDoneDates[note.doneDate].push(note);
         } else {
            notesByDoneDates[note.doneDate] = [note];
         }
      }
   }

   // получаем объект у которого ключ - промежуток дат от начала до конца недели пн-вс
   // значение - массив с 7ю значениями на каждый день
   // null - если такого дня нет
   // пустой массив - если за день нет done задач
   // массив с объектами done задач
   const finalObj = {};
   let dateGap = '';
   for (let i=0; i<weekDayList.length; i++) {

      const weekDay = weekDayList[i];  

      if (i === 0 || weekDay === 0) {

         dateGap = dateList[i] + ' - ' + (dateList[i+6-weekDay] || dateList[dateList.length-1]);
         finalObj[dateGap] = [];
      } 

      if (i === 0 && weekDay !== 0 ) {
         for (let j=0; j<weekDay; j++) {
            finalObj[dateGap][j] = null
         }
      }
      
      if (dateList[i] in notesByDoneDates) {

         finalObj[dateGap][weekDay] = notesByDoneDates[dateList[i]];
      } else {
         finalObj[dateGap][weekDay] = []
      }
   }

   return finalObj
}