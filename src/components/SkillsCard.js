import React from "react";

export default function SkillsCard(props) {
  return (
    
    <div className='container' >
   
      <ul className='list-group'>
        <li
          className='list-group-item text-white py-2 fs-4 fw-semibold'
          style={{ background: "#8f43ee" }}
        >
          {props.Heading}
        </li>
        <li className='list-group-item'>{props.skill}</li>
        <li className='list-group-item'>{props.skill2}</li>
        <li className='list-group-item'>{props.skill3}</li>
        <li className='list-group-item'>{props.skill4}</li>
        <li className='list-group-item'>{props.skill5}</li>
        <li className='list-group-item'>{props.skill6}</li>
        <li className='list-group-item'>{props.skill7}</li>
      </ul>
    </div>
  );
}
