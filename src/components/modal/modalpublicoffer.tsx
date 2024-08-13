import React from "react";
import "./modalpublicoffer.css";
import ReactDOM, { render } from "react-dom";
import { createPortal } from 'react-dom';
import { Fragment } from "react";
import { useEffect } from "react";

function OverlayPO({ children, isOfferOpen, handleClose }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);

    if (!isOfferOpen) return null;
  
    return (
        ReactDOM.createPortal(
            <Fragment>
            {isOfferOpen && (
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
export default OverlayPO;
