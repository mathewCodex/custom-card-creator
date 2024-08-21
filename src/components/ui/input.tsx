import React from 'react';

interface Props {
    label: string,
    numOnly?: boolean,
    value?: string | number,
    onChange: (e : any) => void
}

const Input : React.FC<Props> = ({ label, value, numOnly, onChange }) => {
    const handleNumberChange = (e : any) => {
        if (e.target.value.length <= 2 && !isNaN(Number(e.target.value))) {
            onChange(e);
        }
    }

    return (
        <div className='ui-input'>
            <span>{label}</span>
            {
                numOnly ? (
                    <input type='number' value={value} onChange={handleNumberChange} />
                ) : (
                    <input value={value} onChange={onChange} />  
                )
            }
        </div>
    )
};

export default Input;