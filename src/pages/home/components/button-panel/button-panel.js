
import './button-panel.css'
import React from 'react';
function ButtonPanel({
    children,
    disabled,
    icon,
    text,
    ...props
  }){
    return <div id='btnPanel' className="ButtonPanel">
        <div className='icon'>
            {icon && React.createElement(icon)}
        </div>
        
        <p className='label'>{text}</p>
    </div>
}

export default ButtonPanel;