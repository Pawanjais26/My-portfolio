import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

export default function Showcase(props) {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "Mern Stack Developer",
        "Web Designer",
      ],
      typeSpeed: 80,
      onTypingResumed: (arrayPos, self) => {},
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className='container col-xxl-8  mt-5'>
        <div className='row flex justify-content-center align-items-center py-5'>
          <div className='col-sm-12 col-md-6'>
            <img
              src='https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000'
              className='d-block mx-lg-auto img-fluid left-animation'
              alt='Bootstrap Themes'
              style={{ width: "58%", margin: "auto" }}
              loading='lazy'
            />
          </div>
          <div className='col-md-6 col-sm-12 mt-4 showcase-content '>
            <h1 className=' fw-bold text-body-emphasis lh-1 mb-3 heading1'>
              {props.heading}
            </h1>
            <h1 className='display-4 fw-bold lh-1 mb-3 heading2'>{props.heading1}</h1>
            <h1 className=' mb-3 heading3' style={{ color: "#8f43ee" }}>
              <span ref={el} />
            </h1>

            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <Link to='/project' className='button work-button'>
                {props.work}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
