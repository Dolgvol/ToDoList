import { Modal } from "./Modal";


const Btn = () => (
   <button 
      className="btn btn-primary"         
      >
      View
   </button>
 )


export const ModalViewNote = () => {

   return (
      <Modal btn={Btn()}>

      </Modal>
   );
}