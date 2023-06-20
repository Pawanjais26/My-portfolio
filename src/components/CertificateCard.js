import React from "react";

export default function CertificateCard() {
  return (
    <div className='container my-5 p-5'>
      <h1 class='display-4 fw-bold lh-1 mb-5 pb-4 text-center left-animation'>
        My <span class='text-purple'>Certificates</span>
      </h1>

      <div className=' row flex-lg-row-reverse align-items-center '>
        <div className='col-12 col-lg-6 col-md-7 col-sm-12  '>
          <img
            src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79238/programing-clipart-xl.png'
            class=' img-fluid heading4 mb-4'
            style={{ width: "35rem" }}
            alt='Bootstrap Themes'
          />
        </div>

        <div
          className='col-12 col-lg-6 col-md-5 col-sm-12 mb-4 text-center text-lg-start heading2 pb-5 px-5'
          style={{ backgroundColor: "#E5D1FA" }}
        >
          <div className='my-5  '>
            <h4 class='mb-0 fw-bold pb-2'>UDEMY</h4>
            <a href='/' class='list-group-item list-group-item-action text '>
              <p class='mb-0   fs-5 '>
                March 2023 | The Complete 2023 Web Development Bootcamp
              </p>
            </a>
          </div>
          <div>
            <h4 class='mb-0 fw-bold pb-2'>UDEMY</h4>
            <a href='/' class='list-group-item list-group-item-action text'>
              <p class='mb-0  fs-5'>
                March 2023 | The Complete 2023 Web Development Bootcamp
              </p>
            </a>
          </div>
        </div>

        <div className='col-6'></div>
      </div>
    </div>
  );
}
