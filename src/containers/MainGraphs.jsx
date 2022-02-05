
import { TableCats } from '../components/TableCats'
import { TableDone } from '../components/TableDone'


export const MainGraphs = ({ notesByCats, notesByDates }) => (
  <main className="main">
    <div className="container"> 

      <TableCats notesByCats={notesByCats} />

      <TableDone notesByDates={notesByDates} />
      
    </div>
  </main>
)