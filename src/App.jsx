import { useState } from "react"
import { DetailsSection } from "./DetailsSection"
import { CVHeader } from "./cvHeader"
import { EducationSection } from "./EducationSection"
let inputPersonalList = [["Full Name","MIhai Mihai","text"],["Email","mihai@gmail.com","email"],["Phone Number","0712331","number"],["Adress","New York","adress"]]
let inputEducationList = [["School","Enter school / university","text"],["Degree","Enter Degree/Field Of Study","text"],["Location","Enter Location","text"]]

function App(){
    const [PersonalDetails,setPersonal] = useState({fullname:"",email:"",phone:"",adress:""})
    const handlePersonalInput = (event)=>{
        let value = event.target.value
        let array =Array.from(event.target.parentElement.children);
        let index = array.indexOf(event.target)
        let key = array[index-1].textContent
        let matches = {"Full Name":"fullname","Email":"email","Phone Number":"phone","Adress":"adress"}
        key = matches[key]
        setPersonal({...PersonalDetails,[key]:value})
    }

    return(
        <div className="wrapper">
            <div className="LeftContainer">
                <DetailsSection sectionName="Personal Details" callback={handlePersonalInput} inputList={inputPersonalList}/>
                <EducationSection sectionName="Education" inputList={inputEducationList}/>
            </div>
            <div className="RightContainer">
                <CVHeader person={PersonalDetails} />
            </div>

        </div>
    )
}


export {App}