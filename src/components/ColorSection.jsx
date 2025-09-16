
import { useState } from "react"

function ColorSection(){
    const [Color,setColor] = useState("#254155")
    
    const changeColor = (target) =>{
        document.documentElement.style.setProperty("--accent-color",target)
        setColor(target)
    }
    return(
        <div className="sectionContainer">
            <div className="customizeHeader">Color</div>
            <div className="customizeContainer">
                <p>Accent Color</p>
                <label className="colorPickerLabel" htmlFor="colorPicker" style={{backgroundColor:Color}}></label>
                <input id="colorPicker" className="colorPickerInput" type="color"  onChange={(e) =>changeColor(e.target.value)} />
            </div>
        </div>
    )
}

export {ColorSection}