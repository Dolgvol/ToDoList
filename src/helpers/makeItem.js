
 function getCurrentDate() {
   let todayDate = new Date();
   let monthDate = todayDate.getMonth();
   let dayDate = todayDate.getDate();
   let yearDate = todayDate.getFullYear();

   let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
   let curMonth = months[monthDate];

   let dateInFormat = dayDate + '.' + curMonth + '.' +  yearDate;
   return dateInFormat;
}


let nextId = 1;
export function makeNote(payload, id=null) {
   return {
      id: id ? id : nextId++,
      status: payload.status,
      created: payload.created || getCurrentDate(),
      name: payload.name,
      endpoint: payload.endpoint,
      categoryId: payload.categoryId
   };
 }

