import { useState } from "react";
import { Form } from "./Form"
function EducationSection({ sectionName, inputList, list, setList }) {
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
    function toggleExpanded(id) {
        setList(prevList =>
                prevList.map(item => ({
                ...item,
                expanded: item.ID === id ? !item.expanded : false // only one expanded
            }))
        );
    }


    const handleNewItem = () =>{
        let newItem ={
        "School":"",
        "Degree":"",
        "Location":"",
        "Start Date":"",
        "End Date" :"",
        "ID":nextID,
        "isNew" :true,
        "expanded":true,
        }
        setList(prev => [...prev,newItem])
        setNextID(prev => prev+1)
    }

    const expandedItem = list.find(item => item.expanded);
    const itemsToRender = expandedItem ? [expandedItem] : list;

    return (
        <div className="sectionContainer" id="educationContainer">
            <button className="sectionButton" onClick={toggleSection}>
                <img src="assets/educationIcon.png" className="icon"/>
                <div>{sectionName}</div>
                <img src="assets/buttonIcon.png" className={isSectionOpen ? "arrow rotate" : "arrow"} />
            </button>

            <div className={`inputContainer ${isSectionOpen ? "open" : ""}`} id="inputEducation">
                {itemsToRender.map(item => (
                    <Form
                    key={item.ID}
                    inputList={inputList}
                    item={item}
                    deleteItem={() => handleDeleteItem(item.ID)}
                    saveItem={handleSaveItem} 
                    toggleExpanded={toggleExpanded}
                    />
                ))}

                {!expandedItem ?(
                    <button className="formButton" onClick={handleNewItem}>+ Education</button>
                ):
                (
                    <></>
                )}
            </div>
        </div>
    );
}

export { EducationSection };
