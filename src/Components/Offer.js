import React from 'react';
import "./Offer.css";

const Offer = () => {
    return (
      <div className="offer">
      <div className = "left">
          <div className="title">What we offer?</div>
          <div className="title-info">Select the procedure you want to work with us?</div>
          <div className="offer-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet consectetur labore iure voluptate repellat? Cupiditate laborum corporis blanditiis delectus, quibusdam porro ut enim quas dolores amet inventore aut accusantium quis earum perferendis ducimus quia, quam consequatur ad rerum laudantium sunt? Excepturi quod eos necessitatibus accusantium hic, pariatur exercitationem ullam!</div>
          <div className="boxes">
              <div className="box" id='box1'>Contact <i class="fa-solid fa-angle-down"></i></div>
              <div className="box" id='box2'>Direct Hire <i class="fa-solid fa-angle-down"></i></div>
              <div className="box" id='box3'>Contact to Hire <i class="fa-solid fa-angle-down"></i></div>
          </div>
            </div>
            <div className="right">
                <div className="right-title">How It Works</div>
                <div className="subtitle">Our Process</div>
                <div className="processes">
                    <div className="process">
                        <div className="process-title">
                            <div className="circle">01</div>
                          <div className="process-text">Fill up form </div>
                        </div>
                        <div className="process-content">
                            lipsum as it is sometimes known, is dummy text used in laying out print that are fit for you.
                        </div>
                    </div>

                    <div className="process">
                        <div className="process-title">
                            <div className="circle">02</div>
                          <div className="process-text">Online Examination</div>
                        </div>
                        <div className="process-content">
                            lipsum as it is sometimes known, is dummy text used in laying out print that are fit for you.
                        </div>
                    </div>

                    <div className="process">
                        <div className="process-title">
                            <div className="circle">03</div>
                          <div className="process-text">Interview</div>
                        </div>
                        <div className="process-content">
                            lipsum as it is sometimes known, is dummy text used in laying out print that are fit for you.
                        </div>
                    </div>

                    <div className="process">
                        <div className="process-title">
                            <div className="circle">04</div>
                          <div className="process-text">Selection</div>
                        </div>
                        <div className="process-content">
                            lipsum as it is sometimes known, is dummy text used in laying out print that are fit for you.
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Offer