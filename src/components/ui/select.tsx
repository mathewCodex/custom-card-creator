import React from 'react';

interface Props {
    label: string,
    options: any,
    values: string[],
    large?: boolean,
    onClickAdd?: (e : any) => void,
    onClickRemove?: (e : any) => void
}

const Select : React.FC<Props> = ({ label, options, values, large, onClickAdd, onClickRemove}) => (
    <div className={large ? 'ui-select large' : 'ui-select'}>
        <span>{label}</span>
        <div className='select-options'>
            {
                options.map((option : string, idx : number) => values.includes(option) ? (
                    <h5 className='selected' onClick={onClickRemove} key={idx}>{option}</h5>
                ) : (
                    <h5 onClick={onClickAdd} key={idx}>{option}</h5>
                ))
            }
        </div>
    </div>
);

export default Select;