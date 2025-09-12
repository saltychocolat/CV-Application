
import { EducationInfo } from "./EducationInfo"
function CVEducation({education}){
    return(
        <div className="CVEducationContainer">
            {education.length !=0 ?(
                <div className="header">Education</div>
            ):(
                <>
                </>
            )}

            {
                education.map((item,index) =>(
                    <EducationInfo key={index} item={item}/>
                ))
            }
        
        </div>
    
    )
}

export {CVEducation}