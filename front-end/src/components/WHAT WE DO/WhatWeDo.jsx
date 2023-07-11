import "./WhatWeDo.css";
import {
  BlockchainIcon,
  App_Dev_Icon,
  UXIcon,
  Web_Dev_Icon,
} from "../../assets/index";

const WhatWeDo = () => {
  const departments = [
    {
      icon: <img src={Web_Dev_Icon} />,
      title: "Web development",
      description:
        "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
    },
    {
      icon: <img src={UXIcon} />,
      title: "User experience & design",
      description:
        "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
    },
    {
      icon: <img src={App_Dev_Icon} />,
      title: "Mobile app development",
      description:
        "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
    },
    {
      icon: <img src={BlockchainIcon} />,
      title: "Blockchain solutions",
      description:
        "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
    },
  ];
  return (
    <section id="what we do" className="rootOfWhatDoWeDO">
      <div className="wrapper">
        <h5>What we do</h5>
        <h1 className="whatWeDo">
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </h1>
        <div className="departmentBlocks">
          {departments.map((department, i) => {
            return (
              <div className="depBlock" key={i}>
                <div className="depIcon">{department.icon}</div>
                <h4 className="depTitle">{department.title}</h4>
                <div className="depDesContainer">
                  <span className="depDesText">{department.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
