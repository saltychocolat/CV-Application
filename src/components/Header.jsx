

function Header({loadExemple,clearResume}){
    return(
        <div className="headerContainer">
            <button onClick={clearResume}  className="clearResume">
                <img src="/assets/trashIcon.png" className="trashIcon"></img>
                <div>Clear Resume</div>
            </button>
            <button onClick={loadExemple} className="loadExemple">
                <div>Load Exemple</div>
            </button>
        </div>
    )
}

export {Header}