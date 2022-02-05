import React, {useState, useEffect} from 'react';


export const FilterBlock = ({filter, selectNotes}) => {
   const [added, setAdded] = useState(filter.added);
   const [inProgress, setInProgress] = useState(filter.inProgress);
   const [done, setDone] = useState(filter.done);
 
   return (
     <div className="FilterBlock">
     <div className="form-check form-check-inline">
       <input 
         className="form-check-input success" 
         type="checkbox" 
         value="recent" 
         checked={added}
         onChange={(e) => {
            setAdded(e.target.checked)
         }}
       />
       <label className="form-check-label">Added</label>
     </div>
     <div className="form-check form-check-inline">
       <input 
         className="form-check-input" 
         type="checkbox" 
         value="inProgress" 
         checked={inProgress}
         onChange={(e) => {
           setInProgress(e.target.checked)
         }}
       />
       <label className="form-check-label">In Progress</label>
     </div>
     <div className="form-check form-check-inline">
       <input 
         className="form-check-input" 
         type="checkbox" 
         value="done" 
         checked={done}
         onChange={(e) => {
           setDone(e.target.checked)
         }}
       />
       <label className="form-check-label">Done</label>
     </div>
     <button 
       className="btn btn-primary mx-4"
       onClick={() => {
        selectNotes({added: added, inProgress: inProgress, done: done})
       }}>
        Filter
     </button>
   </div>
   );
 }