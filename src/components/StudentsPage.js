import React,{ useState,useRef } from "react"
import StudentCard from './StudentCard';
import SearchBar from './SearchBar';

function StudentsPage({students, setStudents}) {

  const [search,setSearch] = useState("")
  const [searchTags,setSearchTags]=useState("")
  const tagsRef = useRef([])

  let studentCards;

  if(search === ""&&searchTags===""){
    studentCards = students.map((student,index)=><StudentCard key = {index} students = {students} tagsRef = {tagsRef} student = {student} />)
  }else{
    let filteredStudents = students.filter(
      student => 
      TagAndNameChecker(student)
      )
    studentCards = filteredStudents.map((student,index)=><StudentCard key={index} students = {students} setStudents = {setStudents} tagsRef = {tagsRef} student = {student}/>)
  }

  function TagAndNameChecker(student){
    if(TagChecker(student)||NameChecker(student)){
      return true
    }else{
      return false
    }
  }

  function TagChecker(student){
    if(searchTags === ""){return false}
    if(student.tags){
    let answer = student.tags.join("").toLowerCase().includes(searchTags.toLowerCase())
    return answer
    }
  }

  function NameChecker(student){
    if(search === ""){return false}
    if(
      student.lastName.toLowerCase().includes(search.toLowerCase())
      ||
      student.firstName.toLowerCase().includes(search.toLowerCase())
    ){
      return true
    }

  }

  return (
    <div className="StudentPage">
      <SearchBar
      search = {search}
      setSearch = {setSearch}
      searchTags ={searchTags}
      setSearchTags = {setSearchTags}
      />
      {studentCards}
    </div>
  );
}

export default StudentsPage;