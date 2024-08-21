import React from 'react';

interface Props {
    children: React.ReactNode,
    loading?: boolean,
    onClick: () => void
}

const Button : React.FC<Props> = ({ children, loading, onClick }) => (
    <button className='ui-button' onClick={onClick}>
        {loading ? 'Loading...' : children}
    </button>
);

export default Button;