import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (

    <li className='nav-item mx-sm-4 mx-2 fw-medium '>
      <Link href={setSelected} className=' text-dark fs-4  text-decoration-none project-title ' aria-current='page' style={{cursor: "pointer"}}>
        <div
          className={active ? "portfolioList active" : "portfolioList"}
          onClick={() => setSelected(id)}
        >
          {title}
        </div>
      </Link>
    </li>
  
  );
}
