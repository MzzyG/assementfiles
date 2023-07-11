import React from "react";
import "./CaseStudies.css";
import {
  Rectangle_1,
  pic_1280_960_1,
  pic_1280_960_2,
  pic_1280x960,
} from "../../assets/index";

const CaseStudies = () => {
  const caseStudies = [
    {
      image: <img src={pic_1280x960} />,
      title: "The Olympian",
      description:
        "The only athlete in the world to do her Olympic routine in 2020.",
    },
    {
      image: <img src={pic_1280_960_1} />,
      title: "Skhokho seMali",
      description:
        "Helping South Africans become #CashCleva with Skhokho and TymeBank.",
    },
    {
      image: <img src={pic_1280_960_2} />,
      title: "The Savings Jar",
      description: "Grow your savings treasure and grow your dragon.",
    },
    {
      image: <img src={pic_1280x960} />,
      title: "The Olympian",
      description:
        "The only athlete in the world to do her Olympic routine in 2020.",
    },
  ];
  return (
    <div className="wrapper">
      <section id="case studies" className="rootOfCaseStudy">
        <h5>Case studies</h5>
        <div className="scroll-container">
          {caseStudies.map((caseStudy, j) => {
            return (
              <div key={`case-study-image` + j} className="imageDiv">
                <div>{caseStudy.image}</div>
                <div className="card">
                  <img src={Rectangle_1} className="cardRectangle" />
                  <h3 className="cardTitle">{caseStudy.title}</h3>
                  <span className="cardDescription">
                    {caseStudy.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
