import React from "react";

export default function Heroimg(props) {
  return (
    <div className='hero-img'>
      <div className='pt-5 text-center '>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1 className='fw-bold text-white align-self-center display-4'>{props.heading}</h1>

        <p className='  fs-3 text-white align-self-center '>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
