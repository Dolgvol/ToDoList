import React, {useState, useEffect} from 'react';

// название должно быть и не должно совпадать с текущими
export const CreateCategory = ({ cats, createCat, editCat, catName='' }) => {
   const [name, setName] = useState(catName)
   const [color, setColor] = useState('#0d6efd')

   const [currCat, setCurrCat] = useState()

   const [alert1, setAlert1] = useState(false)

   useEffect(() => {      
      setCurrCat(cats.find(cat => cat.name === name))
   }, [cats, name])




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
               <button 
                  className="btn btn-success"
                  onClick={() => {
                     if (name.length < 3) {
                        setAlert1(true)
                     } else if (currCat) {
                        setAlert1(false)
                        editCat(currCat.id , {color, name})
                        
                     } else {
                        setAlert1(false)
                        createCat({color, name})
                     }                 
                  }}
               >
                  Create Category
               </button>
            </div>            
         </div>
         <div className="AlertBlock">
               { alert1 && <span>Name must be longer than two letters</span> } 
               { currCat && <span>Category will be changed</span> } 
         </div>
      </div>
   );
}