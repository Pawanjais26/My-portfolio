import React from "react";

export default function AboutPage() {
  return (
    <div>
      <div className='container my-5' >
        <div className=' row align-items-center '>
        <h1 class='display-4 fw-bold lh-1 text-center  left-animation'>
                About <span className="text-purple">Me</span>
              </h1>
          <div className='col-12 col-lg-6 col-md-6 col-sm-12 my-4 text-center text-md-start '>
            <div className='mt-5 '>
        
              <ul className='py-3 px-5 heading4' style={{ backgroundColor: "#E5D1FA" }}>
                <li className='my-4 fs-5 lead ' style={{ listStyle: "disc" }}>
                  Hi, I am Pawan .A self-taught passionate Full Stack Web
                  Developer from India. I have made so many projects, you could
                  check some on my portfolio section.
                </li>
                <li className='my-4 fs-5 lead' style={{ listStyle: "disc" }}>
                  A skilled Programmer and Developer seeking for a professional
                  environment to learn new things from industry specialist and
                  to contribute in best capability.
                </li>
                <li className='my-4 fs-5 lead' style={{ listStyle: "disc" }}>
                  Self-motivating , Hardworking and cheerful personality with
                  Goals(and knows how to achieve it).
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12 col-lg-6 col-md-6 col-sm-12 heading4'>
            <img
              src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79238/programing-clipart-xl.png'
              class='mt-5 img-fluid '
              style={{ width: "35rem" }}
              alt='Bootstrap Themes'
            />
          </div>

          <div className='col-6'></div>
        </div>
      </div>
    </div>
  );
}
