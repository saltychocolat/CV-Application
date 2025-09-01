// returns fragments needs inputContainer wrap

import { useState } from "react"
import { InputField } from "./InputField"

function Form({inputList,item,onCancel,onSave}){
    const[isOpen,setOpen] = useState(false)
    return(
        <div className={`form ${!isOpen ? "collapsed" : "open"}`}>
            {
                isOpen == false ?(
                    <>
                        <button className="itemButton" onClick={ ()=>setOpen(true)}>
                            <div>{item.School}</div>
                            <img src="src\assets\eyeIcon.png"></img>
                        </button>
                    </>
                ):
                (
                    <>
                        {
                            inputList.map(([label,placeholder,type],index)=>(
                            <InputField key={index} label={label} placeholder={placeholder} type={type} value={item[label]} />
                            ))
                        }
                        <div className="formFooter" id="educationFooter">
                            <button className="formDelete" id="educationDelete">Delete</button>
                            <button className="formCancel" id="educationCancel" onClick={onCancel}>Cancel</button>
                            <button className="formSave" id="educactionSave" onClick={onSave}>Save</button>
                        </div>
                        
                    </>
                    
                )
            }
        </div>
    )
}

export {Form}