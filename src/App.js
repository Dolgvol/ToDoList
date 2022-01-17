import React, {useState, useEffect} from 'react';
import './App.scss';
import { Header } from './containers/Header';
import { MainGraphs } from './containers/MainGraphs';
import { MainTasks } from './containers/MainTasks';


import { createInitialCats, createInitialNotes } from './storage/init';

import { getSelectedNotes } from './actions/getSelectedNotes';
import { storeController } from './actions/storeController';
import { rebuildNotesByCats } from './actions/rebuildNotes';
import { rebuildNotesByDates } from './actions/rebuildNotes';
import { makeNote } from './actions/makeItem';
import { makeCat } from './actions/makeCat';
import { storageGet, storageSet } from './actions/localStorageActions'


const initialCats = createInitialCats();
const initialNotes = createInitialNotes();
const initialFilter = {
  added: true,
  inProgress: true,
  done: true
}


function App() {  
  const [route, setRoute] = useState();
  window.onhashchange = () => { 
    const currHash = window.location.hash.split('/').slice(-1)[0];
    setRoute(currHash); 
  }
  useEffect(() => {      
    setRoute(window.location.hash.split('/').slice(-1)[0]);
  });

  const [cats, setCats] = useState( storageGet('cats') || initialCats);
  const [notes, setNotes] = useState( storageGet('notes') || initialNotes);
  const [currFilter, setCurrFilter] = useState( storageGet('currFilter') || initialFilter);


  const catsControll = storeController(cats, setCats, makeCat);
  const notesControll = storeController(notes, setNotes, makeNote);

  console.log(cats, notes);

  storageSet('cats', cats);
  storageSet('notes', notes);
  storageSet('currFilter', currFilter);

  switch (route) {    
    case 'graphs':
      return (
        <div className="App">      
          <Header 
            filter={currFilter} 
            selectNotes={setCurrFilter} 
          />      
          <MainGraphs 
            notesByCats={rebuildNotesByCats(notes, cats)} 
            notesByDates={rebuildNotesByDates(notes)}
          />      
        </div>
      );
    case 'main':
    default:
      return (
        <div className="App">      
          <Header 
            filter={currFilter} 
            selectNotes={setCurrFilter} 
          />      
          <MainTasks  
            cats={cats}
            createCat={catsControll.createItem}
            editCat={catsControll.editItem}
            deleteCat={catsControll.deleteItem}

            notes={getSelectedNotes(notes, currFilter)} 
            createNote={notesControll.createItem}
            editNote={notesControll.editItem}
            deleteNote={notesControll.deleteItem}
            deleteGroupNotes={notesControll.deleteGroupNotes} 
          />      
        </div>
      );
  }
}

export default App;
