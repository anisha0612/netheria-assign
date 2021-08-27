import React, { useContext } from "react";
import Icon from "../../assets/icon.svg";
import DataContext from "../../Context/DataContext.js";
import "./Box.css";

const Box = ({ content }) => {
  const { checkedPane, setCheckedPane } = useContext(DataContext);
  return (
    <div className='box'>
      <input
        type='checkbox'
        id='checkbox'
        name={content.header}
        onChange={(e) => {
          if (e.target.checked) {
            setCheckedPane(checkedPane.concat(e.target.name));
          } else {
            setCheckedPane(
              checkedPane.filter((pane) => pane !== e.target.name)
            );
          }
        }}
      />
      <div className='text'>
        <p className='bold'>{content.header}</p>
        <p>{content.title}</p>
      </div>
      <img src={Icon} alt='Icon' />
    </div>
  );
};

export default Box;
