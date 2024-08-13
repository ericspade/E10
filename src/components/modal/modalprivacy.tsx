import React from "react";
import "./modalprivacy.css";
import ReactDOM, { render } from "react-dom";
import { createPortal } from 'react-dom';
import { Fragment } from "react";
import { useEffect } from "react";

function Overlay({ children, isPrivacyOpen, handleClose }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

    if (!isPrivacyOpen) return null;
  
    return (
        ReactDOM.createPortal(
            <Fragment>
            {isPrivacyOpen && (
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
