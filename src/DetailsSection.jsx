import { useState } from "react";
import { InputField } from "./InputField";

function DetailsSection({sectionName,inputList,handlePersonalInput}){
    const [isSectionOpen, setSectionOpen] = useState(true);
    const toggleSection = () => {
        setSectionOpen(prev => !prev);
    }
    
    return(
        <div className="sectionContainer" id="detailsContainer">
            <button className="sectionButton" onClick={toggleSection}>
                <img src="src/assets/personIcon.png" className="icon"/>
                <div>{sectionName}</div>
                <img src="src/assets/buttonIcon.png" className={isSectionOpen ? "arrow rotate" : "arrow"} />
            </button>
            <div className={`inputContainer ${isSectionOpen ? "open" : ""}`} id="inputDetails">
            {   
                inputList.map(([label,placeholder,type],index) => (
                    <InputField key={index} label={label} onChange={handlePersonalInput} placeholder={placeholder} type={type}/>
                ))
            }
            </div>

        </div>
    )
}

export {DetailsSection};