import React from 'react';

interface Props {
    label: string,
    min: string,
    max: string,
    value?: string | number,
    onChange: (e : any) => void
}

const Slider : React.FC<Props> = ({ label, min, max, value, onChange }) => (
    <div className='ui-input slider'>
        <span>{label}</span>
        <input type="range" min={min} max={max} value={value} onChange={onChange}></input>
    </div>
);

export default Slider;