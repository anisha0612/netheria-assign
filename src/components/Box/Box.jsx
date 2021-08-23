import React from "react";
import Icon from "../../assets/icon.svg";
const Box = ({ content, isActive, setIsActive }) => {
  return (
    <div className='box'>
      <input type='checkbox' id='checkbox' />
      <div className='text'>
        <p className='bold'>{content.header}</p>
        <p>{content.title}</p>
      </div>
      <img src={Icon} alt='Icon' />

      {isActive && <div className='box'>{content.text}</div>}
    </div>
  );
};

export default Box;
