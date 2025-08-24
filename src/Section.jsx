import { useState } from "react";
import { InputField } from "./InputField";

function Section({sectionName,inputList,callback}){
    const [isOpen,setOpen] =useState(false)
    const handleClick = ()=>{
        let inputContainer = document.querySelector(".inputContainer")
        if(isOpen == true){
            inputContainer.classList.remove("open")
            setOpen(false)
        }
        else{
            inputContainer.classList.add("open")
            setOpen(true)
        }

    }
    
    return(
        <div className="sectionContainer">
            <div className="sectionHeader">{sectionName}
                <button onClick={handleClick}>^</button>
            </div>
            <div className="inputContainer">
            {   
                inputList.map(([label,placeholder,type],index) => (
                    <InputField key={index} label={label} callback={callback} placeholder={placeholder} type={type}/>
                ))
            }
            </div>

        </div>
    )
}

export {Section};