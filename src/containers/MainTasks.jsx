import React, {useState} from 'react';
import { ModalEditNote } from '../components/ModalEditNote';
import { CreateCategory } from '../components/CreateCategory';
import { NoteGroups } from '../components/NoteGroups'

const Btn = () => (
   <div>
       <button 
         className="btn btn-primary"         
         >
         Create Note
       </button>
   </div>
 )
 
 export const MainTasks = ({ createCat, editCat, cats, createNote, ...rest }) => {

    const [currCat, setCurrCat] = useState(null)

    return (
      <main className="main">
        <div className="container">  
    
          <CreateCategory currCat={currCat} setCurrCat={setCurrCat} 
                          cats={cats} createCat={createCat} editCat={editCat} />
    
          <div className="CreateNote d-flex justify-content-end mt-3">
            <ModalEditNote 
              btn={Btn()} 
              createNote={createNote}
              cats={cats} />
          </div> 
    
          <NoteGroups setCurrCat={setCurrCat} 
                      cats={cats} createNote={createNote} {...rest} />
    
        </div>   
      </main>
    )
 }