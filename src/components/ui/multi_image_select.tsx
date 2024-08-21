import React from 'react';

interface Props {
    label: string,
    options: any,
    value?: string,
    onClick: (e : any) => void
}

const MultiImageSelect : React.FC<Props> = ({ label, options, value, onClick }) => (
    <div className='ui-multi-select'>
        <span>{label}</span>
        <div className='multi-select-options image-options'>
            {
                Object.keys(options).map((option : string, idx: number) => {
                    return option === value ? (
                        <img className='selected' key={idx} src={options[option]} alt='region-select' />
                    ) : (
                        <img onClick={(e : any) => onClick(option)} key={idx} src={options[option]} alt='region-select' />
                    )
                })
            }
        </div>
    </div>
);

export default MultiImageSelect;