
 export function getCurrentDate(date, weekDay=false) {
   let monthDate = date.getMonth();
   let dayDate = date.getDate();
   let yearDate = date.getFullYear();

   let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
   let curMonth = months[monthDate];

   let dateInFormat = dayDate + '.' + curMonth + '.' +  yearDate;
   if (weekDay) {
      return date.getDay();
   } else {
      return dateInFormat;
   }   
}


let nextId = 1;
export function makeNote(payload, id=null) {
   return {
      id: id ? id : nextId++,
      status: payload.status,
      created: payload.created || getCurrentDate(new Date()),
      name: payload.name,
      endpoint: payload.endpoint,
      categoryId: payload.categoryId,
      // желательно убрать условие до первого или, 
      // но оно нужно для тестов и демонстрации
      doneDate: payload.doneDate || ((payload.status === 'done') ? 
                  getCurrentDate(new Date()) : null)
   };
 }

