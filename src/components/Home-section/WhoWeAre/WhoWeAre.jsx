import React from "react";
import "./whoWeAre.css";
function WhoWeAre() {
  return (
    <section className="whoweare_container">
      <div className="whoweare_image"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="people sitting in office" /></div>
      <div className="whoweare_desc">
      <h2>Who We Are</h2>
      <p>
        We are a young, innovative, motivated, skilled, ambitious, and trusted
        group of people working together on providing IT solutions globally. We
        have been working in IT industry for last ten years and have been
        providing IT consulting and software development service in many
        countries including United States, Finland, India and Nepal.
      </p>
      </div>
    </section>
  );
}

export default WhoWeAre;
