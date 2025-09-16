import { useState } from "react"

function FontSection(){
    const [font,setFont] = useState(1)

    const changeFont = (nr) =>{
        switch(nr){
            case 0:
                document.documentElement.style.setProperty("--font-family","serif")
                break;
            case 1:
                document.documentElement.style.setProperty("--font-family","sans-serif",)
                break;
            case 2:
                document.documentElement.style.setProperty("--font-family","monospace")
                break;

        }
        setFont(nr)
    }
        return(
        <div className="sectionContainer">
            <div className="customizeHeader">Fonts</div>
            <div className="customizeContainer">
                <button className={`fontButton ${font==0 ? "current" :""}`} id="Serif" onClick={()=>changeFont(0)}>
                    <div className="fontBig">Aa</div>
                    <div className="fontSmall">Serif</div>
                </button>
                <button className={`fontButton ${font==1 ? "current" :""}`} id="Sans" onClick={()=>changeFont(1)}>
                    <div className="fontBig">Aa</div>
                    <div className="fontSmall">Sans</div>
                </button>
                <button className={`fontButton ${font==2 ? "current" :""}`} id="Mono" onClick={()=>changeFont(2)}>
                    <div className="fontBig">Aa</div>
                    <div className="fontSmall">mono</div>
                </button>
            </div>
        </div>
    )
}

export {FontSection}