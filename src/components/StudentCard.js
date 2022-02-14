import {useState} from "react"
import Tags from "./Tags"

function StudentCard({student,tagsRef}) {

  const [plusOrMinusImage,setImage] =useState(false)
  const [tagsText, setTagsText] = useState("")

  function studentsAverage(student){

    let integersOfGrades = stringToInteger(student)
    let sum = integersOfGrades.reduce(getSum,0)
    return sum/student.grades.length
  }

  function stringToInteger(student){
    let integers = student.grades.map(grade=>parseInt(grade))
     return integers
    }

    function getSum(total, num) {
      return total + Math.round(num);
    }

    let grades = student.grades.map((grade,index)=><h2>{`Test ${index + 1}:     ${grade}%`}</h2>)

    function onClick (e){
      setImage(dogs=>!dogs)
    }

    function onChange(e){
      setTagsText(e.target.value)
    }

    function onSubmit(e){
      e.preventDefault();
      if(!student.tags){
        student.tags = [tagsText]
      }else{
        student.tags.push(tagsText)
          }
         tagsRef.current.push([student.firstName,tagsText])
      setTagsText(" ")
    }

    function GetTags(){
      let tags = tagsRef.current.filter((tag)=>tag[0]===student.firstName)
      return tags.map((tag,index)=><Tags key = {index} tag ={tag}/>)
    }

  return (
    <div className={plusOrMinusImage?"studentcardOpen":"studentcard"}>
      <div className ="studentImage">
        <img src = {`${student.pic}`} alt ="pic of student"></img>
      </div>
      <div className = {plusOrMinusImage?"studentbioOpen":"studentbio"}>
            <h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
            <h2>{`Email: ${student.email}`}</h2>
            <h2>{`Company: ${student.company}`}</h2>
            <h2>{`Skill: ${student.skill}`}</h2>
            <h2>{`Average: ${studentsAverage(student)}%`}</h2>
            {/* note: using the p tags to format the tests down.  thought another div would make it messy */}
            <p></p>
            <div className = "grades">
                {plusOrMinusImage?grades:null}
            </div>

            <div className ="tags">
                    {GetTags()}
            </div>
            <div className="addatag">
                <form onSubmit = {onSubmit}>
                  <input type = "text" placeholder="Add a tag" value = {tagsText} onChange = {onChange} />
                </form>
            </div>
      </div>
      <div className = "buttonstudentcard">
        {/* note it said it had to be a button. so I just emmbed the image in a button. You can also do it easier with an imput tag but I wasnt sure if that counted */}
          <button onClick ={onClick}>
            <img src={
            plusOrMinusImage?
            "https://pngimg.com/uploads/minus/minus_PNG8.png":"https://www.nicepng.com/png/full/5-51611_white-plus-png-plus-sign-in-grey.png"
            } alt = "button text"/>
          </button>
      </div>
    </div>
  );
}

export default StudentCard;