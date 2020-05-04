import React, { useState, useEffect } from 'react';
import InputField from './InputField';

const Body = () => {
    const [bmi, setBmi] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    useEffect(() => {
        const heightInMeters = (parseInt(height)/100)
        let bmi = parseInt(weight/(heightInMeters^2)).toFixed(2)
        setBmi(bmi)
    }, [height, weight]);

    const resetForm = () => {
        setBmi(0);
        setHeight(0);
        setWeight(0);
    }

    return (
        <div className="Main container">
            Body Mass Index (BMI) = {bmi}
            <form action="bmi">

                <InputField field="Height (cm)" setter={setHeight}/>
                <InputField field="Weight (kg)" setter={setWeight}/>

                <button type="reset" className="theme dark-text" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
};

export default Body;