import { useState } from "react"



import { CVDetails } from "./CVDetails"
import { CVEducation } from "./CVEducation"

import { DetailsSection } from "./DetailsSection"
import { EducationSection } from "./EducationSection"
import { ExperienceSection } from "./ExperienceSection"
import { CVExperience } from "./CVExperience"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { ColorSection } from "./ColorSection"
import { FontSection } from "./FontSection"


let inputPersonalList = [["Full Name","Mihai Alexandru","text"],["Email","mihai@gmail.com","email"],["Phone Number","0712331","number"],["Adress","Galati, Romania","adress"]]
let inputEducationList = [["School","Enter school / university","text"],["Degree","Enter Degree/Field Of Study","text"],["Start Date","Enter Start Date","text"],["End Date","Enter Start Date","text"],["Location","Enter Location","text"],]
let inputExperienceLIst = [["Company Name","Enter Company Name","text"],["Position Title","Enter Position Title","text"],["Start Date","Enter Start Date","text"],["End Date","Enter Start Date","text"], ["Location","Enter Location","text"],["Description","Enter Description","text"],]
function App(){
    const [SidebarState,setSidebar] = useState(0)
    const [PersonalDetails,setPersonal] = useState({"Full Name":"Cusai Rares Constantin","Email":"rarescusai@gmail.com","Phone Number":"0771231238","Adress":"Braila,Romania"})
    const [EducationDetails,setEducation] = useState([{"School":"London City University","Degree":"Bachelors in Economics","Start Date":"08/2020","End Date":"present","Location":"New York City, US",ID:0,isNew:false}])
    const [ExperienceDetails,setExperience] = useState([{"Company Name":"Umbrella Inc.","Position Title":"UX & UI Designer","Start Date":"08/2020","End Date":"present","Location":"New York City, US","Description":"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",ID:0,isNew:false}])



    const toggleSidebar = (cur) =>{
        if(cur != SidebarState)
            setSidebar(prev => !prev)
    }
    
    const handlePersonalInput = (event)=>{
        let value = event.target.value
        let array =Array.from(event.target.parentElement.children);
        let index = array.indexOf(event.target)
        let key = array[index-1].textContent
        setPersonal({...PersonalDetails,[key]:value})
    }
    const loadExemple = ()=>{
        setPersonal({"Full Name":"Cusai Rares Constantin","Email":"rarescusai@gmail.com","Phone Number":"0771231238","Adress":"Braila,Romania"})
        setEducation([{"School":"London City University","Degree":"Bachelors in Economics","Start Date":"08/2020","End Date":"present","Location":"New York City, US",ID:0,isNew:false}])
        setExperience([{"Company Name":"Umbrella Inc.","Position Title":"UX & UI Designer","Start Date":"08/2020","End Date":"present","Location":"New York City, US","Description":"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",ID:0,isNew:false}])
    }
    
    const clearResume = () =>{
        setPersonal({"Full Name":"","Email":"","Phone Number":"","Adress":""})
        setEducation([])
        setExperience([])
    }


    return(
        <div className="wrapper">
            <Sidebar cur={SidebarState} toggleSidebar ={toggleSidebar}/>
            <div className="LeftContainer">
                {SidebarState == 0 ? (
                    <>
                        <Header loadExemple={loadExemple} clearResume={clearResume}/>
                        <DetailsSection sectionName="Personal Details" handlePersonalInput={handlePersonalInput} inputList={inputPersonalList} person={PersonalDetails}/>
                        <EducationSection sectionName="Education" inputList={inputEducationList} list={EducationDetails} setList={setEducation}/>
                        <ExperienceSection sectionName="Experience" inputList={inputExperienceLIst} list={ExperienceDetails} setList={setExperience}/>
                    </>
                ):(
                    <>
                        <Header loadExemple={loadExemple} clearResume={clearResume}/>
                        <ColorSection></ColorSection>
                        <FontSection></FontSection>
                    </>
                )}
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