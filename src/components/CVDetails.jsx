import "../style.css"

function CVDetails({person}){
    return(
        <div className="CVDetailsContainer">
            <div className="nameContainer">
                {person["Full Name"]}
            </div>
            <div className="smallContainer">
                {person["Email"] !="" ? (<img src="/assets/emailIcon.png"></img>) :(<></>)}
                <div>{person["Email"]}</div>

                {person["Phone Number"] !="" ? (<img src="/assets/phoneIcon.png"></img>) :(<></>)}
                <div>{person["Phone Number"]}</div>

                {person["Adress"] !="" ? (<img src="/assets/adressIcon.png"></img>) :(<></>)}
                <div>{person["Adress"]}</div>
            </div>
        </div>

    )

}


export {CVDetails}