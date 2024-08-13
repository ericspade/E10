import React from "react";
import "./modal.css";
import ReactDOM, { render } from "react-dom";
import { createPortal } from 'react-dom';
import { Fragment } from "react";
import { useEffect } from "react";

function Overlay({ children, isOpen, handleClose }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

    if (!isOpen) return null;
  
    return (
        ReactDOM.createPortal(
            <Fragment>
            {isOpen && (
                <div className="overlay">
                <div className="overlay__background" onClick={handleClose} />
                <div className="overlay__container">
                    <div className="overlay__controls">
                    </div>
                    {children}
                </div>
                </div>
            )}
            </Fragment>,
        document.body
    )
)
}
export default Overlay;
