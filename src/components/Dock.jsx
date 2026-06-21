import React from 'react'
import "./dock.scss"
const Dock = () =>{
    return (
        <footer className="dock">
          <div className="icon github"> <img src="public/doc-icons/github.svg" alt=""/> </div>
         <div className = "icon note"> <img src="public/doc-icons/note.svg" alt=""/></div>
         <div className = "icon pdf"> <img src="public/doc-icons/pdf.svg" alt=""/></div>
         <div className = "icon calender"> <img src="public/doc-icons/calender.svg" alt=""/></div>
        <div className = "icon spotify"> <img src="public/doc-icons/spotify.svg" alt=""/></div>
        <div className = "icon mail"> <img src="public/doc-icons/mail.svg" alt=""/></div>
        <div className = "icon link"> <img src="public/doc-icons/link.svg" alt=""/></div>
        <div className = "icon cli"> <img src="public/doc-icons/cli.svg" alt=""/></div>
                
            
        </footer>
    )
}
export default Dock 