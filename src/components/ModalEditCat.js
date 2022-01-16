import React, { useState } from 'react';
import { Modal } from "./Modal";


const EditCatBtn = () => (
   <FontAwesomeIcon 
      onClick={() => {}}
      icon={faPen} size="lg" color={'#555'}                  
   /> 
)


export const ModalEditCat = () => {

   const [open, setOpen] = useState(false);


   return (
      <Modal btn={EditCatBtn()} open={open} setOpen={setOpen} >
         <form 
            name="editForm" 
            className="editForm"
            onSubmit={(e) => {
               e.preventDefault()
            }}
         >


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
                  type="button"
                  className="submitBtn btn btn-success"
                  onClick={() => {

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