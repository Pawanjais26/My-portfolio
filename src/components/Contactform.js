import React from "react";

export default function Contactform() {
  return (
    <div className='container p-5 mt-5 mb-3'>
     <h1 class="display-4 fw-bold lh-1 text-center left-animation">
        Contact <span class="text-purple">Me</span>
      </h1>
      <div className=' row d-flex flex-md-row-reverse'  >
        <div className='col-sm-12 col-md-6 d-sm-12'>
          <img
            src='https://media.wired.com/photos/5a6a61938c669c70314b300d/master/w_2560%2Cc_limit/Google-Map-US_10.jpg'
            style={{ width: "100%", height:"82%"  }}
            alt=''
            className="d-none d-md-block image-fluid heading2 mt-5"
          />
        </div>
    
        <form action='' className='col-sm-12 col-md-6 d-sm-12 my-5 border border-2 p-4 heading4' style={{ backgroundColor: "#E5D1FA" }}>
          <div className='mb-4'>
            <label for='Name' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label for='exampleFormControlInput1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter your email'
            />
          </div>
     
          <div className='mb-4'>
            <label for='exampleFormControlTextarea1' className='form-label'>
              Message
            </label>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
          <button type="button" class=" buttons mx-auto ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
