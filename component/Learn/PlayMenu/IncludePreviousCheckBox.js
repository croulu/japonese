import React from "react";

export const IncludePreviousCheckBox = () => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const isChecked = () => {
        return checked ? 1 : 0;
    }

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
