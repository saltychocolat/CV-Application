import "./style.css"

function CVHeader({person}){
    return(
        <div className="CVHeaderContainer">
            <div className="nameContainer">
                {person.fullname}
            </div>
            <div className="smallContainer">
                {person.email !="" ? (<img src="src\assets\emailIcon.png"></img>) :(<></>)}
                <div>{person.email}</div>

                {person.phone !="" ? (<img src="src\assets\phoneIcon.png"></img>) :(<></>)}
                <div>{person.phone}</div>

                {person.adress !="" ? (<img src="src\assets\adressIcon.png"></img>) :(<></>)}
                <div>{person.adress}</div>
            </div>
        </div>

    )

}


export {CVHeader}