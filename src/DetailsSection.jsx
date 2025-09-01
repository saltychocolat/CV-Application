import { useState } from "react";
import { InputField } from "./InputField";

function DetailsSection({sectionName,inputList,callback}){
    const [isOpen,setOpen] =useState(false)
    const handleClick = ()=>{
        let inputContainer = document.querySelector("#inputDetails")
        let img = document.querySelector("#detailsContainer img");
        if(isOpen == true){
            img.classList.remove("rotate")
            inputContainer.classList.remove("open")
            setOpen(false)
        }
        else{
            inputContainer.classList.add("open")
            img.classList.add("rotate")
            setOpen(true)
        }

    }
    
    return(
        <div className="sectionContainer" id="detailsContainer">
            <button className="sectionButton" onClick={handleClick}>
                <div>{sectionName}</div>
                <img src="src\assets\buttonIcon.png"></img>
            </button>
            <div className="inputContainer" id="inputDetails">
            {   
                inputList.map(([label,placeholder,type],index) => (
                    <InputField key={index} label={label} callback={callback} placeholder={placeholder} type={type}/>
                ))
            }
            </div>

        </div>
    )
}

export {DetailsSection};