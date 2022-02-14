
import {useState,useEffect} from "react" 
import StudentsPage from './StudentsPage';

function App() {

  const [students,setStudents] = useState([])

  useEffect(()=>{fetch("https://api.hatchways.io/assessment/students")
  .then((r) => r.json())
  .then((data) => setStudents(data.students));},[])
  

  return (
    <div className="App">
      <StudentsPage setStudents = {setStudents} students = {students}/>
    </div>
  );
}

export default App;