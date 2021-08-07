import React, { useState } from "react";
import Modal from "react-modal";
// import Brand from "./Brand";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="o-video">
          {/* <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe> */}
          <img
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/aboutmedark.jpg"
            alt="banner"
          />
        </div>
        {/* END ABOUT Video */}
        <div className="description">
          <h3 className="name">Welcome 👋</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello! My name is William and I am a software engineer based in
                NYC. I enjoy coming up with simple solutions as much as I love
                learning about complicated ones. My focus is building meaningful
                products and experiences.
                <br />
                <br />
                In my past life, I worked at the intersection of healthcare and
                technology for over 7 years. On my downtime, I enjoy exercising
                and taking photos, like the one you see above!
              </p>
              <div className="tokyo_tm_button">
                {/* <button onClick={toggleModal} className="ib-button"> */}
                <a
                  style={{ margin: "0px", padding: "0px" }}
                  className="ib-button"
                  href="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/William+Ku+-+Software+Engineer+Resume.pdf"
                >
                  <button className="ib-button">Link to Resume</button>
                </a>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    {/* <a href="mailto:mail@gmail.com">mail@gmail.com</a> */}
                    nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    {/* <a href="tel:+770221770505">+77 022 177 05 05</a> */}
                    nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>nil
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>nil
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
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
                <Document
                  file="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/William+Ku+-+Software+Engineer+Resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
