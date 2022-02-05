


 export const TableDone = ({ notesByDates }) => {

   return (
      <div className="TableDone">
         <h3>
            Done By Time
         </h3>
         <table className="table">
            <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Mon</th>
                     <th scope="col">Tues</th>
                     <th scope="col">Wedn</th>
                     <th scope="col">Thur</th>
                     <th scope="col">Fri</th>
                     <th scope="col">Sat</th>
                     <th scope="col">Sun</th>
                  </tr>
            </thead>
            <tbody>
               {Object.entries(notesByDates).map(([datesGap, weekArr]) => (
                     <tr key={datesGap}>
                        <th scope="row">{datesGap}</th>
                           {weekArr.map((dayArr, index) => {
                              if (!dayArr) {
                                 return <td key={index}>{''}</td>                                 
                              } else if (dayArr.length === 0) {
                                 return <td key={index}>{'-'}</td>
                              } else {
                                 return <td key={index}><b>{dayArr.length}</b></td>
                              }
                           }
                           )}
                     </tr>
                  )
               )}

            </tbody>
         </table>
      </div>
   )
}