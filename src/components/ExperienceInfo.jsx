function ExperienceInfo({item}){
    return(
        <div className="info">
            <div className="infoGroup">
                <div className="infoSub">{item["Start Date"]} - {item["End Date"]}</div>
                <div className="infoName">{item["Company Name"]}</div>
            </div>
            <div className="infoGroup">
                <div className="infoSub">{item.Location}</div>
                <div className="infoSub">{item["Position Title"]}</div>
            </div>
            <div className="infoGroup">
                <div className="infoSub"></div>
                <div className="infoSub">{item.Description}</div>
            </div>
        </div>
    )
}
export {ExperienceInfo}