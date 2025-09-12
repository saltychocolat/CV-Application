import { ExperienceInfo } from "./ExperienceInfo"


function CVExperience({experience}){
    return(
        <div className="CVExperienceContainer">
            {experience.length != 0 ?(
                <div className="header">Experience</div>
            ):(
                <></>
            )}
            {
                experience.map((item,index) => (
                    <ExperienceInfo item={item} key={index}/>
                ))
            }
        </div>
    )
}


export {CVExperience}