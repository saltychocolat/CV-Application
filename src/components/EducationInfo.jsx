function EducationInfo({item}){
    return(
        <div className="info">
            <div className="infoGroup">
                <div className="infoSub">{item["Start Date"]} - {item["End Date"]}</div>
                <div className="infoName">{item.School}</div>
            </div>
            <div className="infoGroup">
                <div className="infoSub">{item.Location}</div>
                <div className="infoSub">{item.Degree}</div>
            </div>
        </div>
    )
}

export {EducationInfo}