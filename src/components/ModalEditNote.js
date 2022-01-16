import { Modal } from "./Modal";
import React, {useState, useEffect} from 'react';


export const ModalEditNote = ({  btn, categoryInit='', 
                                 statusInit='recent', nameInit='', 
                                 endpointInit='' }) => {

   const [category, setCategory] = useState(categoryInit)
   const [status, setStatus] = useState(statusInit)
   const [name, setName] = useState(nameInit)
   const [endpoint, setEndpoint] = useState(endpointInit)

   return (
      <Modal btn={btn}>
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
                  value={category}  
                  onChange={(e) => {
                     setCategory(e.target.value)
                  }}
               >
                  <option value="Work">Work</option>
                  <option value="Home">Home</option>
                  <option value="Hobby">Hobby</option>
               </select>

               {/* const MySelect = ({options=countries, value='ZW', onChange}) => (
               <select defaultValue={value} onChange={(e) => onChange(e.target.value)}>
                  {Object.entries(options).map(([key, cont]) => <option value={key}>{key}: {cont}</option> )}
               </select>
                  ) */}
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
                  value={endpoint}  
                  onChange={(e) => {
                     setEndpoint(e.target.value)
                  }}
               />
            </div>

            <div className="submitBlock mt-auto mb-2 d-flex justify-content-center">
               <button 
                  className="submitBtn btn btn-success"
                  onClick={(e) => {
                     
                  }} 
                  >
                  Submit
               </button>
            </div>
         </form>
      </Modal>
   );
}