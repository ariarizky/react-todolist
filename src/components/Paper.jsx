import React from "react";

const Paper = ({children}) => {
    return (
        <div className="container">
            <div className="frame">
                {children}
            </div>
        </div>
    )
    }
export default Paper