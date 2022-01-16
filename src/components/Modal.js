import React, {useState} from 'react';

export const Modal = ({children, btn}) => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <span onClick={() => setOpen(true)}>
            {btn}
         </span>

         <div 
            className="ModalWrapper"
            style={{display: open ? 'block' : 'none' }}
            onClick={(e) => {
               if (e.target.className === 'ModalWrapper') {
                  setOpen(false)
               }
            }}
         >
            <div className="modalWindow">
               <div className="closeBtnBlock">
                  <button 
                     type="button" 
                     className="btn-close" 
                     onClick={() => setOpen(false)}
                     >
                  </button>
               </div>
               <div className="modalContent">
                  {children}
               </div>            
            </div>
         </div>
      </>
   );
}