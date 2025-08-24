import { useState } from "react"
import { Section } from "./Section"

let inputList = [["Full Name","MIhai Mihai","text"],["Email","mihai@gmail.com","email"],["Phone Number","0712331","number"],["Adress","New York","adress"]]
function App(){
    const [PersonalDetails,setPersonal] = useState({fullname:"",email:"",phone:"",adress:""})
    const handleInput = (event)=>{
        let value = event.target.value
        let array =Array.from(event.target.parentElement.children);
        let index = array.indexOf(event.target)
        let key = array[index-1].textContent
        let matches = {"Full Name":"fullname","Email":"email","Phone Number":"phone","Adress":"adress"}
        key = matches[key]
        setPersonal({...PersonalDetails,[key]:value})
    }
    return(
        <div className="wrapper">
            <div className="LeftContainer">
                <Section sectionName="Personal Details" callback={handleInput} inputList={inputList}/>
            </div>
            <div className="RightContainer">
                <div className="PersonalDetailsContainer">
                    {console.log(PersonalDetails)}
                    {PersonalDetails.fullname}
                </div>
            </div>

        </div>
    )
}


export {App}