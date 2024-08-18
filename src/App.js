import Addstudent from './components/student';
import Fav from './components/fav';

import './index.css';
import { useState } from 'react';
import {BrowserRouter, Link,Route,Routes} from 'react-router-dom';

function App() {
  const [student, setstudent] = useState([
    { 
      id: 1, 
      stuname: "Sridharan" 
    },
    { 
      id: 2,
       stuname: "Nagul" 
      },
    {
       id: 3, 
      stuname: "Sidharth"
     },
    { 
      id: 4, 
      stuname: "Ram" 
    },
    { 
      id: 5, 
      stuname: "Kamal" 
    }
  ]);

   const [favoriteStudents, setFavoriteStudents] = useState([]);

  return (
    <div className="flex flex-col h-screen items-center bg-black text-white" >
      <BrowserRouter>
      <nav>
<Link to={"./"} ><button className='border p-3 bg-red-900 border-red-900 text-2xl m-10 min-w-60 hover:bg-red-400 transition-all duration-1000 '  >Students List</button></Link>
{" "}
<Link to={"/Fav"} ><button className='border p-3 bg-red-900 border-red-900 text-2xl m-10 min-w-60 hover:bg-red-400 transition-all duration-1000'>Favorite Students</button></Link>
</nav>
        <Routes>
          <Route path="/" element={<Addstudent student={student} setstudent={setstudent} setFavoriteStudents={setFavoriteStudents} favoriteStudents={favoriteStudents} />} />
          <Route path="/Fav" element={<Fav favoriteStudents={favoriteStudents} setFavoriteStudents={setFavoriteStudents} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  

export default App;
