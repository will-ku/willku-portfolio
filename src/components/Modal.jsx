import React from "react";

// WK: this is the unedited Modal component. I copied the code from  the About component and created this. The Modal in the About component will be updated to display a resume.

export default function Modal() {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <div className="tokyo_tm_modalbox_about">
        <button className="close-modal" onClick={toggleModal}>
          <img src="assets/img/svg/cancel.svg" alt="close icon" />
        </button>
        {/* END POPUP CLOSE BUTTON */}
        <div className="box-inner">
          <div className="description_wrap scrollable">
            <div className="my_box">
              <div className="left">
                <div className="about_title">
                  <h3>Photography Skills</h3>
                </div>
                {/* END ABOUT TITLE */}

                <div className="tokyo_progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">Wedding Photography</span>
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 95 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Lifestyle Photography</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 80 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">Family Photography</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END PROGRESS */}
              </div>
              {/* END LEFT */}

              <div className="right">
                <div className="about_title">
                  <h3>Language Skills</h3>
                </div>
                {/* END TITLE */}
                <div className="tokyo_progress">
                  <div className="progress_inner" data-value="95">
                    <span>
                      <span className="label">English</span>
                      <span className="number">95%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 95 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="progress_inner" data-value="90">
                    <span>
                      <span className="label">Japanese</span>
                      <span className="number">90%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 90 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="progress_inner" data-value="85">
                    <span>
                      <span className="label">Arabian</span>
                      <span className="number">85%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 85 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* EDN TOKYO PROGRESS */}
              </div>
              {/* END RIGHT */}
            </div>
            {/* END MYBOX */}

            <div className="counter">
              <div className="about_title">
                <h3>Fun Facts</h3>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    <h3>777+</h3>
                    <span>Projects Completed</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>3K</h3>
                    <span>Happy Clients</span>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <h3>9K+</h3>
                    <span>Lines of Code</span>
                  </div>
                </li>
              </ul>
              {/* END COUNTER CONTENT */}
            </div>
            {/* END COUNTER */}

            <div className="partners">
              <div className="about_title">
                <h3>Our Partners</h3>
              </div>
              <Brand />
            </div>
            {/* END PARTNER SLIDER */}
          </div>
        </div>
      </div>
    </Modal>
  );
}
