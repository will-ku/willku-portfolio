import React, { useState } from "react";
import Modal from "react-modal";
// import Brand from "./Brand";
import { pdfjs, Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import ExpressSVG from "./techSVG";


Modal.setAppElement("#root");

const About = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="o-video">
          {/* <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe> */}
          <img
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/aboutmedarkshorter.jpg"
            alt="banner"
          />
        </div>
        {/* END ABOUT Video */}
        <div className="description">
          <h3 className="name">Hello! I'm William 👋</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                I'm a software engineer based in NYC who is passionate about
                turning ideas into meaningful digital products. As a generalist,
                I have experience building both dynamic designs and robust
                backend applications.
                <br />
                <br />
                Before web development, I devoted over 8 years to improving
                healthcare through technology in various roles. In my downtime,
                I enjoy photography, basketball, and a competitive game of
                Settlers of Catan 🌾.
              </p>
              <div className="tokyo_tm_button">
                {/* <button onClick={toggleModal} className="ib-button"> */}
                <a
                  style={{ margin: "0px", padding: "0px" }}
                  className="ib-button"
                  href="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/William+Ku+-+Software+Engineer+Resume.pdf"
                  target="_blank"
                >
                  <button className="ib-button">Link to Resume</button>
                </a>
                {/* Resume
                </button> */}
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <p style={{ marginBottom: "20px" }}>
                Below are a few technologies that I've worked with recently:
              </p>
              <ul>
                <li>
                  <p>
                    <span>▹</span>
                    {/* <a href="tel:+770221770505">+77 022 177 05 05</a> */}
                    React
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Redux
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Javascript
                  </p>
                </li>
                <li>
                  <span>▹</span>
                  D3.js
                </li>
                <li>
                  <p>
                    <span>▹</span>
                    {/* <a href="tel:+770221770505">+77 022 177 05 05</a> */}
                    Express
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>HTML5/CSS3
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Ruby
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Ruby on Rails
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>PostgreSQL
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>MongoDB
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Node
                  </p>
                </li>
                <li>
                  <p>
                    <span>▹</span>Git
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
                  className="resume-pdf"
                  file="https://pixsy-dev.s3.us-east-2.amazonaws.com/port/William+Ku+-+Software+Engineer+Resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={1} />
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
