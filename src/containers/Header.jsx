import { FilterBlock } from "../components/FilterBlock";


export const Header = (props) => (
   <header className="header bg-light">
     <div className="container">
       <div className="row align-items-center">
 
         <nav className="linkList col-6 d-flex justify-content-start">
           <a href="#/main" className="link-success mx-4">Task List</a>
           <a href="#/graphs" className="link-success mx-4">Infographics</a>
         </nav>
 
         <div className="col-6 d-flex justify-content-start">
           <FilterBlock {...props} />
         </div>
 
       </div>
     </div>
   </header>
 )