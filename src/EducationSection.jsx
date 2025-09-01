import { useState } from "react";
import { InputField } from "./InputField";
import { Form } from "./form";

function EducationSection({sectionName,inputList}){
    const [isOpen,setOpen] =useState(false)
    const [list,setList] = useState([{"School":"abc","Degree":"no","Location":"Braila"},{"School":"abc","Degree":"no","Location":"Braila"}])
    const handleClick = () => {
    setOpen((prev) => !prev); 
    };

    return(
        <div className="sectionContainer" id="educationContainer">
            <button className="sectionButton" onClick={handleClick} >
                <div>{sectionName}</div>
                <img src="src\assets\buttonIcon.png" className={isOpen ? "rotate" : ""}></img>
            </button>
            <div className={`inputContainer ${isOpen ? "open" : ""}`} id="inputEducation">
                {
                    list.map((item,index)=>(
                        <Form inputList={inputList} item={item} key={index} />
                    ))
                }
                <button className="formButton" >+ Education</button>
            </div>
        </div>
    )
    
}
export {EducationSection}