import { useState } from "react";
import { InputField } from "./InputField";

function Form({ inputList, item,deleteItem,saveItem ,toggleExpanded}) {
    const [draftData, setDraftData] = useState(item || {});

    // Update draft when an input changes
    const handleInputChange = (field, value) => {
        setDraftData(prev => ({ ...prev, [field]: value }));
    };

    // Cancel editing: reset draft and collapse
    const handleCancelClick = () => {
        if(item.isNew){
            deleteItem(item.ID)
            toggleExpanded(item.id)
        }
        setDraftData(item);
        toggleExpanded(item.id)
    };

    // Save draft and collapse
    const handleSaveClick = () => {
        saveItem(draftData);
        toggleExpanded(item.id)
    };

    return (
    <div className={`form ${item.expanded ? "open" : "collapsed"}`}>
        {!item.expanded ? (
        <button className="itemButton" onClick={() => toggleExpanded(item.ID)}>
            <div>{item["Company Name"] || item.School|| ""}</div>
            <img src="assets/eyeIcon.png" alt="expand" className="eye" />
        </button>
        ) : (
        <>
            {inputList.map(([label, placeholder, type], index) => {
            if(label == "Start Date"){
                return(
                    <div className="dateDiv">
                        <InputField
                            key={"start"}
                            label={label}
                            placeholder={placeholder}
                            type={type}
                            value={draftData[label] || ""}
                            onChange={(e) => handleInputChange(label, e.target.value)}
                        />
                        <InputField
                            key={"end"}
                            label={"End Date"}
                            placeholder={"Enter End Date"}
                            type={type}
                            value={draftData["End Date"] || ""}
                            onChange={(e) => handleInputChange("End Date", e.target.value)}
                        />
                    </div>
                )
            }
            else if(label == "End Date")
                return null;

            return (
                <InputField
                    key={index}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    value={draftData[label] || ""}
                    onChange={(e) => handleInputChange(label, e.target.value)}
                />
            )

            })}
            <div className="formFooter">
                <button className="formDelete" onClick={deleteItem}>
                    <img className="trashIcon" src="/assets/deleteIcon.png"></img>
                    <div>Delete</div>
                </button>
                <button className="formCancel" onClick={handleCancelClick}>Cancel</button>
                <button className="formSave" onClick={handleSaveClick}>Save</button>
            </div>
        </>
        )}
    </div>
    );
}

export { Form };
