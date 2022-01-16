import React, {useState, useEffect} from 'react';
import './App.scss';
import { Header } from './containers/Header';

import { ModalEditNote } from './components/ModalEditNote';
import { CreateCategory } from './components/CreateCategory';
import { NoteGroups } from './components/NoteGroups'

import { storeController, createInitialCats, createInitialNotes } from './storage'
import {makeNote} from '../helpers/makeItem';
import {makeCat} from '../helpers/makeCat';


const Btn = () => (
  <button 
     className="btn btn-primary"         
     >
     Create Note
  </button>
)

export const MainTasks = (props) => (
  <main className="main">
    <div className="container">

      <CreateCategory />

      <div className="CreateNote d-flex justify-content-end mt-3">
        <ModalEditNote btn={Btn()} />
      </div>


      <NoteGroups {...props} />

    </div>   
</main>
)

export const MainGraphs = () => (
  <>
  <div className="container">
    ZALUPA
  </div>
  </>
)

const initialCats = createInitialCats()
const initialNotes = createInitialNotes()

function App() {  
  const [route, setRoute] = useState(window.location.hash.split('/').slice(-1)[0]);
  window.onhashchange = () => { 
    const currHash = window.location.hash.split('/').slice(-1)[0];
    setRoute(currHash); 
    // console.log(route)
    // console.log(currHash)
  }


  const [cats, setCats] = useState(initialCats)
  const [notes, setNotes] = useState(initialNotes)
  const [currFilter, setCurrFilter] = useState({
                                                  added: true,
                                                  inProgress: true,
                                                  done: false
                                              })

  function getSelectedNotes() {
    if (notes) {
      let selectedItems = []
      if (currFilter.added) {
            selectedItems.push(...notes.filter((note) => 
              note.status === 'added'))
      }
      if (currFilter.inProgress) {
          selectedItems.push(...notes.filter((note) => 
            note.status === 'inProgress'))
      }
      if (currFilter.done) {
        selectedItems.push(...notes.filter((note) => 
          note.status === 'done'))
      }
      return selectedItems
    }
  }

  const notesControll = notesController(notes, setNotes)

  console.log(cats, notes)


  // function localStorageController(state, setState, localStorageName) {
  //   if (!state && localStorage[localStorageName]) {
  //       setState(JSON.parse(localStorage[localStorageName])) 
  //   } else if (state) {
  //       localStorage.setItem(localStorageName, JSON.stringify(state))
  //   }
  // }
  // localStorageController(cats, setCats, 'cats')
  // localStorageController(notes, setNotes, 'notes')
    


  switch (route) {    
    case 'graphs':
      return (
        <div className="App">      
          <Header filter={currFilter} selectNotes={setCurrFilter} />      
          <MainGraphs />      
        </div>
      );
    case 'main':
    default:
      return (
        <div className="App">      
          <Header filter={currFilter} selectNotes={setCurrFilter} />      
          <MainTasks notes={getSelectedNotes()} cats={cats} 
            createItem={notesControll.createItem}
            editItem={notesControll.editItem}
            deleteItem={notesControll.deleteItem} />      
        </div>
      );
  }  
}

export default App;
