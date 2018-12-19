import React from 'react';

const Checkbox = ({handleCheckboxChange, label}) => {
    
    return (
        <div className="checkbox">
            <label>
            <input
                type="checkbox"
                onClick={handleCheckboxChange}
            />
            </label>
            &nbsp; {label}
        </div>
    );
}

export default Checkbox