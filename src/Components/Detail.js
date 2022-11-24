import React from 'react';
import "./Detail.css";

const Detail = () => {
  return (
      <div className="detail-container">
          <div className="top">
              <div className="top-left">Sales Intern - On-site</div>
              <button className = "top-btn">Apply Now</button>
              </div>
          <div className="bottom">
              <div className="left">
                  <div className="left-top">
                      <h1 className="title">Job Overview</h1>
                      <span className="left-info"><span id='highlight'>Req #:</span> 1017</span>
                      <div className="section">
                          <i class="fa-solid fa-location-dot"></i>
                          <div className="inner-section">
                              <h1>Location:</h1>
                              <span>Irving, Texas, United States</span>
                          </div>
                      </div>

                       <div className="section">
                         <i class="fa-solid fa-suitcase"></i>
                          <div className="inner-section">
                              <h1>Job Category:</h1>
                              <span>Technology</span>
                          </div>
                      </div>

                       <div className="section">
                       <i class="fa-solid fa-clock"></i>
                          <div className="inner-section">
                              <h1>Date Posted:</h1>
                              <span>2021-11-09 16:30:20</span>
                          </div>
                      </div>
                  </div>
                  <div className="left-bottom">
                      <h1 className="title">Share this job</h1>
                      <div className="horizontal">
                      <div className="socials">
                          <i class="fa-brands fa-square-facebook"></i>
                          <i class="fa-brands fa-linkedin"></i>
                          <i class="fa-brands fa-square-twitter"></i>
                      </div>

                      <div className="vertical"></div>
                      <div className="share-container">
                          <div className="share-section">
                              <i class="fa-solid fa-envelope"></i>
                              <a href ="google.com">Email this job</a>
                              </div>
                              
                               <div className="share-section">
                              <i class="fa-solid fa-print"></i>
                              <a href ="google.com">Print</a>
                              </div>
                              
                               <div className="share-section">
                            <i class="fa-solid fa-copy"></i>
                              <a href ="google.com">Copy job link</a>
                          </div>
                      </div>
                      </div>
                      </div>
              </div>

              <div className="right">
                  <h1 className="title">Job Description:</h1>
                  <span className="job-des">Neutrosys Inc is looking for a few recent graduate individuals to join a growing office in the staffing business. This is a great opportunity to get your foot into the door with a staffing firm to start a career in either recruitment or sales. The ideal candidate would be a self-starter, self-motivated, persuasive, and enthusiastic, and enjoy working in a group or individual.</span>

                  <div className="right-section">
                      <span>Responsibilities:</span>
                      <ul>
                          <li>Involve in new business development</li>
                          <li>Update and manage all sales activities, opportunities, and account information</li>
                          <li>Emailing/cold calling new accounts</li>
                          <li>Information gathering and sorting</li>
                          <li>Work closely with Recruitment and Operations teams</li>
                      </ul>
                  </div>

                          <div className="right-section">
                      <span>Qualifications:</span>
                      <ul>
                          <li>1 year of relevant work experience is preferred</li>
                          <li>Excellent communication skills (Written & Verbal)</li>
                          <li>Ability to multitask, organize, and prioritize work</li>
                          <li>Self-directed, can-do attitude and sense of humor appreciated</li>
                          <li>Authorized to work in the United States</li>
                      </ul>
                  </div>

                      <div className="right-section">
                      <span>Why join us?</span><br />
                      <div className="job-des">We are committed to a diversified and happy employee working culture with the opportunity to grow. We are a company that rewards employees for their performance and dedication. We believe that employees’ happiness is the key to level-up the company. We are committed to the enjoyable and flexible working environment.</div>
                      <h2 className= "benefits">Some of our benefits include:</h2>
                      <ul>
                          <li>Competitive Base Salary</li>
                          <li>Competitive Commission Structure</li>
                          <li>Bonus</li>
                          <li>PTO</li>
                          <li>Flexible Working Hours</li>
                      </ul>
                  </div>
                   <i className='italic'>Neutrosys Inc is an EEO Employer providing IT solutions in United States, Asia, and Europe.</i>
                 <button className="apply-btn">Apply Now</button>
              </div>
          </div>
    </div>
  )
}

export default Detail