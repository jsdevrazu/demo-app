import React from 'react'

interface IProps {
    children?: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<IProps> = ({ children, onClose }) => {
    return (
        <>
            <div className='overlay' onClick={onClose}></div>
            <div className='modal_wrapper'>
                {children}
            </div>
        </>
    )
}

export default Modal