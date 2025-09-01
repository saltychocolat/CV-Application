import "./style.css"

function InputField({label,placeholder,type,callback,value}){

    return(
        <>
            <label>{label}
            </label>
            <input  placeholder={placeholder} type={type} onChange={callback} defaultValue={value}></input>
        </>


    )
}

export {InputField}