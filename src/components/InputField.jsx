import React from 'react';

const InputField = (props) => {
    const { field, setter } = props;
    return (
        <div className="Input-Field">
            <label htmlFor="input">{field}</label>
            <input type="number" placeholder="0.0" name={field} onChange={(event) => setter(event.target.value)}/>
        </div>
    )
}

export default InputField;