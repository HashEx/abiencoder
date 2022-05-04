import React from 'react';

import './FormGroup.css';


interface FormGroupProps {
    label?: string;
    error?: string;
}
  
const FormGroup: React.FC<FormGroupProps> = ({label, children, error}) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            {children}
            {error && (
                <div className="form-text error">{error}</div>
            )}
        </div>
    )
}

export default FormGroup;