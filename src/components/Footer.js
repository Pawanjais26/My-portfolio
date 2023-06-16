import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return <div>
    <div className="d-flex flex-column fs-5 justify-content-center text-center py-4 border-top ">
      <p>© 2023 Shaurya , Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex justify-content-center align-items-center">
        <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-facebook text-primary"></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"><i class="bi bi-telephone-inbound-fill text-success"></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-twitter"></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="#"><i className="bi bi-linkedin text-primary"></i></Link></li>
      </ul>
    </div>
  </div>;
}
