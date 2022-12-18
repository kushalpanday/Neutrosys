import React from "react";
import ServiceItemProps from "./ServiceItemProps";
import "./services.css";

function Services() {
  return (
    <section className="services_container">
      <h2>Services</h2>

      <div className="services_items">
        <div className="services_design"></div>
        <ServiceItemProps
          image="images/services/mobile_app1.png"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Talent Solution"
        />
        <ServiceItemProps
          image="images/services/mobile_app2.png"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Software Development"
        />
        <ServiceItemProps
          image="images/services/mobile_app3.svg"
          desc=" Developing and maintaining smooth cross platform mobile application and
        providing end to end testing."
          name="Outsourcing"
        />
      </div>
      <p className="services_learnmore">
        {" "}
        <a href="/services" target="_blank">learn more <svg className="learnmore_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(22, 65, 251, 1)",transform: "rotate(180deg)",msFilter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}}><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg> </a>
      </p>
    </section>
  );
}

export default Services;
