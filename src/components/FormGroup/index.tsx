import React from 'react';

import './FormGroup.css';


interface FormGroupProps {
    label?: string;
}
  
const FormGroup: React.FC<FormGroupProps> = ({label, children}) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            {children}
        </div>
    )
}

export default FormGroup;