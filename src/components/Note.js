import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSync, faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { ModalEditNote } from '../components/ModalEditNote';


const EditNoteBtn = () => (
   <FontAwesomeIcon 
      onClick={() => {}}
      icon={faPen} size="lg" color={'#555'}                  
   /> 
 )

export const Note = ({ note, cats, editNote, deleteNote }) => {

   return (
      <>
         <div className="Note bg-light">

            <div className="itemName itemCell">
               {note.name}
            </div>

            <div className="itemCreated itemCell">
               {note.created}
            </div>

            <div className="itemEndpoint itemCell">
               {note.endpoint}
            </div>

            <div className="itemStatusManagment itemCell">
               <FontAwesomeIcon icon={faPlus} size="lg" 
                  color={ (note.status === 'added') ? '#198754' : '#aaa'}
                  onClick={() => editNote(note.id, {status: 'added'})}
               />
               <FontAwesomeIcon icon={faSync} size="lg" 
                  color={ (note.status === 'inProgress') ? '#198754' : '#aaa'}
                  onClick={() => editNote(note.id, {status: 'inProgress'})}
               />
               <FontAwesomeIcon icon={faCheck} size="lg" 
                  color={ (note.status === 'done') ? '#198754' : '#aaa'}
                  onClick={() => editNote(note.id, {status: 'done'})}
               />
            </div>

            <div className="itemManagment itemCell">               
  
               <ModalEditNote 
                  btn={EditNoteBtn()} 
                  editNote={editNote}
                  note={note}
                  cats={cats} 
               />                     
            
               <FontAwesomeIcon
                  icon={faTrash} size="lg" color={'#555'} 
                  onClick={() => deleteNote(note.id)}
               />
                             
            </div>   
           
         </div>
      </>
   );
}