import "./style.css"

function InputField({label,placeholder,type,onChange,value}){

    return(
        <div className="inputPair">
            <label>{label}
            </label>
            <input  placeholder={placeholder} type={type} onChange={onChange} defaultValue={value}></input>
        </div>


    )
}

export {InputField}