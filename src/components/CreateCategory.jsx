import React, {useState, useEffect} from 'react';

// название должно быть и не должно совпадать с текущими
export const CreateCategory = ({ cats, createCat, editCat,
                                 currCat, setCurrCat  }) => {

   const [name, setName] = useState(currCat?.name || '')
   const [color, setColor] = useState(currCat?.color || '#0d6efd')

   const [alert1, setAlert1] = useState(false)
   const [alert2, setAlert2] = useState(false)

   useEffect(() => { 
      if (cats.find(cat => cat.id === currCat?.id)) {
         setName(currCat?.name)
         setColor(currCat?.color)
      } else {
         setName('')
         setColor('#0d6efd')
         setCurrCat(null)
      }
      setAlert1(false)
      setAlert2(false)
   }, [cats, currCat])


   return (
      <div className="CreateCategoryWrapp bg-light">
         <div className="CreateCategory d-flex justify-content-between align-items-center mt-3">
            <div className="col-9 d-flex justify-content-start align-items-center">

               <div className="NameInput d-flex align-items-center mx-2">
                  <strong className="text-success mx-3">
                     Name
                  </strong>
                  <input 
                     type="text" 
                     className="form-control"
                     value={name}  
                     onChange={(e) => {                        
                        setName(e.target.value)
                        if (e.target.value.length < 3) {
                           setAlert1(true)   
                        }  else {
                           setAlert1(false)
                        } 
                        setAlert2(false)
                     }}
                  />
               </div>

               <div className="ColorInput d-flex align-items-center mx-2">
                  <strong className="text-success mx-3">
                     Color
                  </strong>
                  <input 
                     type="color" 
                     className="form-control"
                     list="presetColors"
                     value={color}  
                     onChange={(e) => {
                        setColor(e.target.value)
                     }}
                  />
                  <datalist id="presetColors">
                     <option>#0d6efd</option>
                     <option>#6610f2</option>
                     <option>#d63384</option>
                     <option>#dc3545</option>
                     <option>#fd7e14</option>
                     <option>#ffc107</option>
                     <option>#0dcaf0</option>
                     <option>#20c997</option>
                  </datalist>
               </div>
            </div>


            <div className="col-3 d-flex justify-content-end">

               { currCat ?
                     <>
                        <button 
                           className="btn btn-success"
                           onClick={() => {
                              if (name.length > 2) {
                                 editCat(currCat.id , {color, name})
                                 setCurrCat(null)
                              }         
                           }}
                        >
                           Edit Category
                        </button>
                        <button 
                           className="btn btn-danger"
                           onClick={() => {
                              setCurrCat(null)
                           }}
                        >
                           Cancel
                        </button>
                     </>                  
                  :                   
                     <button 
                        className="btn btn-success"
                        onClick={() => {
                           if (cats.find(cat => cat.name === name)) {
                              setAlert2(true)
                           } else if (name.length > 2) {
                              setAlert2(false)
                              createCat({color, name})
                           }  else {
                              setAlert1(true)
                           }            
                        }}
                     >
                        Create Category
                     </button>
               }

            </div>            
         </div>
         <div className="AlertBlock">
               { alert1 && <span>Name must be longer than two letters</span> } 
               { alert2 && <span>This name already exist</span> } 
         </div>
      </div>
   );
}