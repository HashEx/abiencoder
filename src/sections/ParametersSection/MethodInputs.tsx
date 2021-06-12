import React from 'react';


import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Select from '../../components/Select';

interface MethodInputsProps {
    value: any[];
    onChange: (inputs: any[]) => void;
    options: any[];
    errors?: any[];
}

const MethodInputs: React.FC<MethodInputsProps> = ({ value, onChange, options, errors = [] }) => {
    const handleChange = (index: number) => (name: string) => (e: any) => {
        onChange([
            ...value.slice(0, index),
            {
                ...value[index],
                [name]: e.target.value
            },
            ...value.slice(index + 1)
        ])
    }
    return (
        <>
            {value.map((item, index) => {
                const handleTypeChange = handleChange(index)("type");
                const handleValueChange = handleChange(index)("value");
                const error = errors[index];
                return (
                    <div key={index} className="list-element row">
                        <div className="col-md-3">
                            <FormGroup label={item.name || "Argument"}>
                                <Select
                                    onChange={handleTypeChange}
                                    value={item.type}
                                    options={options}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-9">
                            <Input
                                value={item.value}
                                onChange={handleValueChange}
                                placeholder="Enter arguments without quotes, arrays enter like [1, 2, 3]"
                                className="method-input__value"
                                type="text"
                                name="listen"
                                invalid={!!error}
                            />
                            {error && <label className="error">{error}</label>}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MethodInputs;