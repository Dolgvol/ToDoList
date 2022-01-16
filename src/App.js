import React, {useState, useEffect} from 'react';
import './App.scss';
import { Header } from './containers/Header';
import { MainGraphs } from './containers/MainGraphs';
import { MainTasks } from './containers/MainTasks';


import { createInitialCats, createInitialNotes } from './storage/init'
import { storeController } from './storage'
import { makeNote } from './helpers/makeItem';
import { makeCat } from './helpers/makeCat';


const initialCats = createInitialCats();
const initialNotes = createInitialNotes();

function App() {  
  const [route, setRoute] = useState();
  window.onhashchange = () => { 
    const currHash = window.location.hash.split('/').slice(-1)[0];
    setRoute(currHash); 
    // console.log(route)
    // console.log(currHash)
  }
  useEffect(() => {      
    setRoute(window.location.hash.split('/').slice(-1)[0]);
  })

  const [cats, setCats] = useState(initialCats);
  const [notes, setNotes] = useState(initialNotes);
  const [currFilter, setCurrFilter] = useState({
                                                  added: true,
                                                  inProgress: true,
                                                  done: true
                                              });

  function getSelectedNotes() {
    if (notes) {
      let selectedItems = [];
      if (currFilter.added) {
            selectedItems.push(...notes.filter((note) => 
              note.status === 'added'));
      }
      if (currFilter.inProgress) {
          selectedItems.push(...notes.filter((note) => 
            note.status === 'inProgress'));
      }
      if (currFilter.done) {
        selectedItems.push(...notes.filter((note) => 
          note.status === 'done'));
      }
      return selectedItems.sort((a, b) => {
        if (a.id > b.id) {
          return 1
        }
        if (a.id < b.id) {
          return -1
        }
        return 0
      });
    }
  }

  const catsControll = storeController(cats, setCats, makeCat);
  const notesControll = storeController(notes, setNotes, makeNote);

  console.log(cats, notes);


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
          <Header 
            filter={currFilter} 
            selectNotes={setCurrFilter} />      
          <MainGraphs />      
        </div>
      );
    case 'main':
    default:
      return (
        <div className="App">      
          <Header 
            filter={currFilter} 
            selectNotes={setCurrFilter} />      
          <MainTasks  
            cats={cats}
            createCat={catsControll.createItem}
            editCat={catsControll.editItem}
            deleteCat={catsControll.deleteItem}

            notes={getSelectedNotes()} 
            createNote={notesControll.createItem}
            editNote={notesControll.editItem}
            deleteNote={notesControll.deleteItem}
            deleteGroupNotes={notesControll.deleteGroupNotes} />      
        </div>
      );
  }  


  // return (
  //   <div className="App">      
  //     <Header 
  //       filter={currFilter} 
  //       selectNotes={setCurrFilter} />
  //       {console.log(route)}
  //       { route === 'graphs' ? 
  //           <MainGraphs /> :
  //             <MainTasks  
  //             cats={cats}
  //             createCat={catsControll.createItem}
  //             editCat={catsControll.editItem}
  //             deleteCat={catsControll.deleteItem}
      
  //             notes={getSelectedNotes()} 
  //             createNote={notesControll.createItem}
  //             editNote={notesControll.editItem}
  //             deleteNote={notesControll.deleteItem}
  //             deleteGroupNotes={notesControll.deleteGroupNotes} />   
  //       }   
  //   </div>
  // );


}

export default App;
