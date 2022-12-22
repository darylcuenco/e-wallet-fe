import React from 'react';
//import colors from '../styles/colors';

//import your ICON component & make sure your path is right
import { BiUser } from "react-icons/bi";
import './button.css'


export default function Button({
  children,
  disabled,
  icon,
  ...props
}) {
    // const mergedStyles = cx(/*css here*/)
    return (
        <button {...props} disabled={disabled} className={"Button"}>
  
          {/* If icon prop is provided then render ICON component */}
          {/* {<BiUser/>} */}
          {React.createElement(icon)}
  
          {/* Other children */}
          {children}
  
        </button>
     );
  
}