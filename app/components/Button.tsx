import React from 'react'

interface IProps {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string
    width?: string;
    title:string;
  }


const Button: React.FC<IProps>  = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className='app_btn'>
        {title}
    </button>
  )
}

export default Button