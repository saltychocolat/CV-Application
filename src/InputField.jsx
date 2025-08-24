import "./style.css"

function InputField({label,placeholder,type,callback}){

    return(
        <>
            <label>{label}
            </label>
            <input  placeholder={placeholder} type={type} onChange={callback}></input>
        </>


    )
}

export {InputField}