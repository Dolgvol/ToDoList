import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSync, faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'


export const Note = ({ note, editItem, deleteItem }) => {

   // useEffect(() => {
   // }, [])

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
                  onClick={() => editItem(note.id, {status: 'added'})}
               />
               <FontAwesomeIcon icon={faSync} size="lg" 
                  color={ (note.status === 'inProgress') ? '#198754' : '#aaa'}
                  onClick={() => editItem(note.id, {status: 'inProgress'})}
               />
               <FontAwesomeIcon icon={faCheck} size="lg" 
                  color={ (note.status === 'done') ? '#198754' : '#aaa'}
                  onClick={() => editItem(note.id, {status: 'done'})}
               />
            </div>

            <div className="itemManagment itemCell">
               
               <FontAwesomeIcon 
                  onClick={() => editItem(note.id, {status: 'done'})}
                  icon={faPen} size="lg" color={'#555'}
                  onClick={() => {}}
               />                        
            
               <FontAwesomeIcon
                  icon={faTrash} size="lg" color={'#555'} 
                  onClick={() => deleteItem(note.id)}
               />
                             
            </div>   
           
         </div>
      </>
   );
}