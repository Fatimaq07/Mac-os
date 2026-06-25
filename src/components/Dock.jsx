import React from 'react';
import "./dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
    return (
        <footer className="dock">

            <div
                onClick={() => {
                    setWindowsState(state => ({
                        ...state,
                        github: true
                    }));
                }}
                className="icon github"
            >
                <img src="public/doc-icons/github.svg" alt="" />
            </div>

            <div
                onClick={() => {
                    setWindowsState(state => ({
                        ...state,
                        note: true
                    }));
                }}
                className="icon note"
            >
                <img src="public/doc-icons/note.svg" alt="" />
            </div>

            <div
                onClick={() => {
                    setWindowsState(state => ({
                        ...state,
                        resume: true
                    }));
                }}
                className="icon pdf"
            >
                <img src="public/doc-icons/pdf.svg" alt="" />
            </div>

            <div 
            onClick = {() => {window.open("https://calendar.google.com/","_blank")}}
            
            className="icon calender">
                <img src="public/doc-icons/calender.svg" alt="" />
            </div>

            <div
                onClick={() => {
                    setWindowsState(state => ({
                        ...state,
                        spotify: true
                    }));
                }}
                className="icon spotify"
            >
                <img src="public/doc-icons/spotify.svg" alt="" />
            </div>

            <div 
            
            onClick = {()=>{window.open("mailto:qfatima504@gmail.com","_blank")}}
            
            className="icon mail">
                <img src="public/doc-icons/mail.svg" alt="" />
            </div>

            <div
            
            onClick = {()=>{window.open("https://www.linkedin.com/in/fatima-qureshi-94a798230/","_blank")}}
            className="icon link">
                <img src="public/doc-icons/link.svg" alt="" />
            </div>

            <div
                onClick={() => {
                    setWindowsState(state => ({
                        ...state,
                        cli: true
                    }));
                }}
                className="icon cli"
            >
                <img src="public/doc-icons/cli.svg" alt="" />
            </div>

        </footer>
    );
};

export default Dock;