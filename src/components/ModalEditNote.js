import React, { useState, useEffect } from 'react';
import { Modal } from "./Modal";


export const ModalEditNote = ({  btn, 
                                 note,
                                 createNote,
                                 editNote,
                                 cats=[]                              
                              }) => {
                                 
   const [categoryId, setCategoryId] = useState(note?.categoryId || cats[0]?.id);
   const [status, setStatus] = useState(note?.status || 'added');
   const [name, setName] = useState(note?.name || '');
   const [endpoint, setEndpoint] = useState(note?.endpoint || '');

   const [open, setOpen] = useState(false);

   useEffect(() => {      
      setCategoryId(note?.categoryId || cats[0]?.id)
   }, [open]);

        console.log(cats)                         
   return (
      <Modal btn={btn} open={open} setOpen={setOpen}>
         <form 
            name="editForm" 
            className="editForm"
            onSubmit={(e) => {
               e.preventDefault()
            }}
         >
            <div className="mb-4">
               <label className="form-label">Category</label>

               <select 
                  className="form-select"
                  value={categoryId}  
                  onChange={(e) => {
                     setCategoryId(e.target.value)
                  }}
               >
                  { cats.map(cat => (
                     <option key={cat.id} value={cat.id}>{cat.name}</option>)) 
                  }
               </select>
            </div>

            <div className="mb-4">
               <label className="form-label">Status</label>
               <select 
                  className="form-select"
                  value={status}  
                  onChange={(e) => {
                     setStatus(e.target.value)
                  }}
               >
                  <option value="added">Added</option>
                  <option value="inProgress">In Progress</option>
                  <option value="done">Done</option>
               </select>
            </div>

            <div className="mb-3">
               <label className="form-label">Name</label>
               <textarea 
                  type="text" 
                  className="form-control" 
                  value={name}  
                  onChange={(e) => {
                     setName(e.target.value)
                  }} 
               />
            </div>

            <div className="mb-4">
               <label className="form-label">Endpoint</label>
               <input 
                  type="date" 
                  className="form-control" 
                  value={endpoint.split('.').reverse().join('-')}  
                  onChange={(e) => {
                     setEndpoint(e.target.value.split('-').reverse().join('.'))
                  }}
               />
            </div>

            <div className="submitBlock mt-auto mb-2 d-flex justify-content-center">
               <button 
                  disabled={cats[0] ? false : true}
                  type="button"
                  className="submitBtn btn btn-success"
                  onClick={() => {
                     (createNote ?
                        createNote({ categoryId: Number(categoryId), status, name, endpoint }) :
                           editNote(note.id, { categoryId: Number(categoryId), status, name, endpoint})
                     );
                     setOpen(false);                  
                  }} 
                  >
                  Submit
               </button>
            </div>
         </form>
      </Modal>
   );
}