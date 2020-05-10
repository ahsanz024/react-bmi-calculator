import React from 'react';

const Toggle = (props) => {
    const { right, left, changeHandler } = props

    return (
        <div className="toggle">
            <p>{left}</p>
            <label className="label">
                <input type="checkbox" onChange={(event) => changeHandler(event.target.checked)} />
                <span className="slider theme" />
            </label>
            <p>{right}</p>
        </div>
    )
}

export default Toggle;