import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faPlusSquare, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Note } from './Note';
import { ModalEditNote } from '../components/ModalEditNote';



const GroupBody = ({notes=[], ...rest}) => (
   <div className="GroupBody">
      {notes.map((note) => <Note key={note.id} note={note} {...rest} />)}      
   </div>
 )

 const CreateInCat = () => (
   <FontAwesomeIcon 
      icon={faPlusSquare} size="lg" color={'#555'}
   />
 )

export const NoteGroup = ({
                            open=true, cat, notes,
                            createNote, deleteCat, 
                            deleteGroupNotes, setCurrCat,
                            ...rest }) => {
   const [isOpen, setOpen] = useState(open)


   return (
      <div className="NoteGroup">

         <div 
            className="GroupHead bg-light" 
            style={{color: cat.color}}           
         >
            <div className="categoryInfo">
               <div className="categoryName">
                  {cat.name}
               </div>
               <div className="categoryCountManag">

                  <ModalEditNote 
                     btn={CreateInCat()} 
                     createNote={createNote}
                     cats={[cat]} />       

                  <FontAwesomeIcon 
                     onClick={() => {}}
                     icon={faPen} size="lg" color={'#555'}  
                     onClick={() => {
                        setCurrCat(cat)
                        window.scrollTo(0, 0);
                     }}                
                  /> 

                  <FontAwesomeIcon 
                     icon={faTrash} size="lg" color={'#555'}
                     onClick={() => {
                        deleteCat(cat.id);
                        deleteGroupNotes(cat.id)
                     }}
                  />
               </div>
            </div>

            <div 
               className="bodyTitle"
               onClick = {() => setOpen(!isOpen)}
            >
               <div className="nameTitle">
                  Name
               </div>
               <div className="createdTitle">
                  Created
               </div>
               <div className="endpointTitle">
                  Endpoint
               </div>
               <div className="statusTitle">
                  Status
               </div>
               <div className="iconsTitle">
                  <FontAwesomeIcon icon={faAngleDown} size="2x" color={'#555'} 
                     style={isOpen ? {transform: "rotate(0deg)"} : 
                                    {transform: "rotate(180deg)"}}/>
               </div>
            </div>
         </div>

         {isOpen && 
            <GroupBody notes={notes.filter((item) => 
                  item.categoryId === cat.id)}  {...rest} />
         }
    

      </div>
   );
}

