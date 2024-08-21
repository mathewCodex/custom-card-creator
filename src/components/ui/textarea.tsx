import React from 'react';

interface Props {
    label: string,
    value?: string | number,
    onChange?: (e : any) => void
}

const Textarea : React.FC<Props> = ({ label, value, onChange }) => (
    <div className='ui-textarea'>
        <span>{label}</span>
        <textarea value={value} 
        onChange={onChange}
        placeholder='KEYWORD TEXT STYLING - !keyword!&#10;CARD REFERENCE STYLING - #card#&#10;KEYWORD IMAGE - *keyword*'></textarea>
    </div>
);

export default Textarea;