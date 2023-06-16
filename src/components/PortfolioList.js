import React from "react";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (

    <li className='nav-item mx-3 fw-medium heading2'>
      <a href={setSelected} className='nav-link text-dark fs-4 fs-sm-5 text-decoration-none ' aria-current='page' style={{cursor: "pointer"}}>
        <div
          className={active ? "portfolioList active" : "portfolioList"}
          onClick={() => setSelected(id)}
        >
          {title}
        </div>
      </a>
    </li>
  
  );
}
