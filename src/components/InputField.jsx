import "../style.css"

function InputField({label,placeholder,type,onChange,value}){

    return(
        <div className="inputPair">
            <label className="InputFieldLabel">{label}
            </label>
            {label=="Description"?(
                <textarea className="InputFieldTextArea" placeholder={placeholder} type={type} onChange={onChange} defaultValue={value}></textarea>
            ):(
                <input className="InputFieldText" placeholder={placeholder} type={type} onChange={onChange} value={value}></input>
            )}
        </div>


    )
}

export {InputField}