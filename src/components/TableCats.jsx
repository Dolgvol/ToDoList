

 export const TableCats = ({ notesByCats }) => {

   const statuses = ['added', 'inProgress', 'done']

   return (
      <div className="TableCats">
         <h3>
            General Summary 
         </h3>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Category Name</th>
                  <th scope="col">Added</th>
                  <th scope="col">In Progress</th>
                  <th scope="col">Done</th>
               </tr>
            </thead>

            <tbody>
               {Object.entries(notesByCats).map(([catName, catObj]) => (
                     <tr key={catName}>
                        <th scope="row">{catName}</th>
                        {statuses.map(status => {
                           if (status in catObj) {
                             return (<td key={status}>{catObj[status].length}</td>)
                           } else {
                              return (<td key={status}>0</td>)
                           }
                        })}
                     </tr>
                  )
               )}
            </tbody>
         </table>
      </div>
   )
}