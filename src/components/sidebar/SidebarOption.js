import React from 'react';
import "./SidebarOption.css"

const SidebarOption = (props) => {

  const {Icon,text,active}=props;

  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption