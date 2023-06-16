import React, { useEffect, useState } from "react";
import PortfolioList from "../components/PortfolioList";
import { HtmlCss, Reacts, contentPortfolio, javascript } from "../data";

export default function Portfolios(props) {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "html",
      title: "HTML & CSS",
    },
    {
      id: "js",
      title: "Javascript",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "html":
        setData(HtmlCss);
        break;
      case "js":
        setData(javascript);
        break;
      case "react":
        setData(Reacts);
        break;
      case "content":
        setData(contentPortfolio);
        break;

      default:
        setData(HtmlCss);
        break;
    }
  }, [selected]);

  return (
    <div className='container my-5 p-5' style={{ backgroundColor: "#E5D1FA" }}  >
     <h1 class="display-4 fw-bold lh-1 text-center left-animation">
        My <span class="text-purple">Projects</span>
      </h1>
      <header class='d-flex justify-content-center my-5 container-fluid'>
      
        <ul class='nav navbar-nav '></ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </header>
      <div className='row mb-5'>
        {data.map((d) => (
          <div className='col-md-4 mb-5'>
            <div className='card heading4' style={{ width: "18rem" }}>
              <img
                src={d.img}
                className='card-img-top'
                style={{ height: "170px", objectFit: "fill" }}
                alt='...'
              />
              <div className='card-body   '>
                <h5 className='card-title text-center'>{d.title}</h5>
                {/* <p className='card-text'>{props.text}</p> */}
                <a href={d.src} className='btn d-block buttons mb-3'>
                  Source
                </a>
                <a href={d.code} className='btn d-block buttons'>
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
