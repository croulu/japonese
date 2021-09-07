import React from "react";

export const IncludePreviousCheckBox = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <Checkbox
                label = "include previous lesson(s)"
                value = { checked }
                onChange={ handleChange }
            />
        </div>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} /> {label}
        </label>
    );
};
