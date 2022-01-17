

let nextId = 1;
export function makeCat(payload, id=null) {
   return {
      id: id ? id : nextId++,
      name: payload.name,
      color: payload.color,
   };
 }
