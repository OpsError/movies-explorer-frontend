import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    return (
        <div className={`preloader ${props.isEnable ? "preloader_enable" : ""}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
