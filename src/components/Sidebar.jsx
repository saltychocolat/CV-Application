function Sidebar({cur,toggleSidebar}){
    return(
        <div className="sidebarContainer">
            <button onClick={()=>toggleSidebar(0)} className={`contentButton ${cur == 0 ? "open" :""}`}>
                <img src="src\assets\pageIcon.png" className="sidebarImg"></img>
                <div>Content</div>
            </button>
            <button onClick={()=>toggleSidebar(1)} className={`customizeButton ${cur == 1 ? "open" :""}`}>
                <img src="src\assets\customizeIcon.png" className="sidebarImg"></img>
                <div>Customize</div>
            </button>
        </div>
    )
}

export {Sidebar}