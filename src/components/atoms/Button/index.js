import react from 'react';
import './button.scss';

const Button = ({title, ...rest}) => {
  return (
    <div className="input-wrapper">
      <button className="button" {...rest}>{title}</button>
    </div>
  )
}

export default Button; 
