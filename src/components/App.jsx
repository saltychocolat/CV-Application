import { useState } from "react"



import { CVDetails } from "./CVDetails"
import { CVEducation } from "./CVEducation"

import { DetailsSection } from "./DetailsSection"
import { EducationSection } from "./EducationSection"
import { ExperienceSection } from "./ExperienceSection"
import { CVExperience } from "./CVExperience"

let inputPersonalList = [["Full Name","MIhai Mihai","text"],["Email","mihai@gmail.com","email"],["Phone Number","0712331","number"],["Adress","New York","adress"]]
let inputEducationList = [["School","Enter school / university","text"],["Degree","Enter Degree/Field Of Study","text"],["Start Date","Enter Start Date","text"],["End Date","Enter Start Date","text"],["Location","Enter Location","text"],]
let inputExperienceLIst = [["Company Name","Enter Company Name","text"],["Position Title","Enter Position Title","text"],["Start Date","Enter Start Date","text"],["End Date","Enter Start Date","text"], ["Location","Enter Location","text"],["Description","Enter Description","text"],]
function App(){
    const [PersonalDetails,setPersonal] = useState({fullname:"Cusai Rares Constantin",email:"rarescusai@gamil.com",phone:"0771231238",adress:"Braila,Romania"})
    const [EducationDetails,setEducation] = useState([{"School":"London City University","Degree":"Bachelors in Economics","Start Date":"08/2020","End Date":"present","Location":"New York City, US",ID:0,isNew:false}])
    const [ExperienceDetails,setExperience] = useState([{"Company Name":"Umbrella Inc.","Position Title":"UX & UI Designer","Start Date":"08/2020","End Date":"present","Location":"New York City, US","Description":"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",ID:0,isNew:false}])
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
                <DetailsSection sectionName="Personal Details" handlePersonalInput={handlePersonalInput} inputList={inputPersonalList}/>
                <EducationSection sectionName="Education" inputList={inputEducationList} list={EducationDetails} setList={setEducation}/>
                <ExperienceSection sectionName="Experience" inputList={inputExperienceLIst} list={ExperienceDetails} setList={setExperience}/>
            </div>
            <div className="RightContainer">
                <CVDetails person={PersonalDetails} />
                <CVEducation education={EducationDetails}/>
                <CVExperience experience = {ExperienceDetails}/>
            </div>

        </div>
    )
}


export {App}