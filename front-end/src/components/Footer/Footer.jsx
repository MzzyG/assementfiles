import "./Footer.css";

const Footer = () => {
  return (
    <section id="what we do" className="rootOfFooter">
      <div className="wrapper">
        <h5 style={{ color: "white", position: "relative", top: 40 }}>
          Contact us
        </h5>
        <div className="levelTwoDetails">
          <h1 className="closingQuestion">
            {`Have a project in mind? Let's make it happen`}
          </h1>
          <div style={{ width: 453 }}></div>
          <div className="contactDetails">
            <span>
              22 Lawley Road, Woodstock, 7925, Cape Town, South Africa +27 21
              469 1500 enquirie@kingjames.co.za
            </span>
          </div>
        </div>
        <div className="levelThreeDetails">
          <div className="links">
            <a href="#" className="textClass">
              Terms of service Privacy policy Impressum
            </a>
          </div>
          <div className="links">
            <a href="#" className="textClass">
              Facebook Instagram Twitter
            </a>
          </div>
          <div className="links">
            <a href="#" className="textClass">
              Github Linkedin Teams
            </a>
          </div>
          <div className="links">
            <a href="#" className="textClass">
              Youtube Behance Dribbble
            </a>
          </div>
          <div className="jobs">
            <div href="#" className="textClass">
              Explore open jobs
            </div>
            <div href="#" className="textClass">
              ©2000—2022 King James Digital
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
