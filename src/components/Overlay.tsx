import React from 'react';


function closeNav() {
	(document.getElementById("sidenav") as HTMLInputElement).style.left = "-340px";
	(document.getElementById("overlay") as HTMLInputElement).style.display = "none";
}


function Overlay(){
    return(
        <div className="overlay" id="overlay" onClick={closeNav} ></div>
    );
}


export default Overlay;
