import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./work.css";

const work = () => {
  return (
    <div>
      <h2 className="titleh text-center my-4">How We Work?</h2>

      <div className="work container-fluid">
        <div className="row">
          <div className="card1 col-sm-4">
            <h6>step 1</h6>
            <h3>Research</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias qui aut fuga minima asperiores itaque natus
              aspernatur, delectus ipsum.
            </p>
            <img
              src="./Aboutimage/how-we-work/card1.png"
              alt="working mechanism"
              width="40%"
            />
          </div>
          <div className="line1 col-sm-4">
            <img src="/Aboutimage/line.png" alt="" width="100%" />
          </div>
          <div className="card2 col-sm-4">
            <h6>step 2</h6>
            <h3>Idea</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias qui aut fuga minima asperiores itaque natus
              aspernatur, delectus ipsum.
            </p>
            <img
              src="./Aboutimage/how-we-work/card2.png"
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
        <div className="row">
          <div className="line2 col-sm-12 ">
            <img src="/Aboutimage/line2.png" alt="" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="card3 col-sm-4">
            <h6>step 3</h6>
            <h3>process</h3>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias qui aut fuga minima asperiores itaque natus
              aspernatur, delectus ipsum.
            </p>
            <img
              src="./Aboutimage/how-we-work/card3.png"
              alt="working mechanism"
              width="40%"
            />
          </div>
          <div className="line3 col-sm-4">
            <img src="/Aboutimage/line.png" alt="" width="100%" />
          </div>
          <div className="card4 col-sm-4">
            <h6>step 4</h6>
            <h3>time</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias qui aut fuga minima asperiores itaque natus
              aspernatur, delectus ipsum.
            </p>
            <img
              src="./Aboutimage/how-we-work/card4.png"
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
        <div className="row">
          <div className="line2 col-sm-12">
            <img src="/Aboutimage/line2.png" alt="" width="100%" />
          </div>
        </div>
        <div className="row">
          <div className="card5 col-sm-4">
            <h6>step 5</h6>
            <h3>goal</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus alias qui aut fuga minima asperiores itaque natus
              aspernatur, delectus ipsum.
            </p>
            <img
              src="./Aboutimage/how-we-work/card5.png"
              alt="working mechanism"
              width="40%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
