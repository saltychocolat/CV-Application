import { useState } from "react";
import { Form } from "./form";

function ExperienceSection({ sectionName, inputList, list, setList }) {
    const [nextID, setNextID] = useState(2);
    const [isSectionOpen, setSectionOpen] = useState(false);

    const toggleSection = () => {
        setSectionOpen(prev => !prev);
    }

    const handleDeleteItem = (id) => {
        setList(prevList => prevList.filter(item => item.ID !== id));
    };

    const handleSaveItem = (updatedItem) => {
        setList(prev =>{
            updatedItem.isNew = false
            return prev.map(item => (item.ID === updatedItem.ID ? updatedItem : item))}
        );
    };


    const handleNewItem = () =>{
        let newItem ={
        "School":"",
        "Degree":"",
        "Location":"",
        "Start Date":"",
        "End Date" :"",
        "Description":"",
        "ID":nextID,
        "isNew" :true,
        }
        setList(prev => [...prev,newItem])
        setNextID(prev => prev+1)
    }

    return (
        <div className="sectionContainer" id="experienceContainer">
            <button className="sectionButton" onClick={toggleSection}>
                <img src="src/assets/workIcon.png" className="icon"/>
                <div>{sectionName}</div>
                <img src="src/assets/buttonIcon.png" className={isSectionOpen ? "arrow rotate" : "arrow"} />
            </button>

            <div className={`inputContainer ${isSectionOpen ? "open" : ""}`} id="inputExperience">
                {list.map(item => (
                    <Form
                    key={item.ID}
                    inputList={inputList}
                    item={item}
                    deleteItem={() => handleDeleteItem(item.ID)}
                    saveItem={handleSaveItem} 
                    />
                ))}

                <button className="formButton" onClick={handleNewItem}>+ Experience</button>
            </div>
        </div>
    );
}

export { ExperienceSection };
