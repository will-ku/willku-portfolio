import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    return;
  }
  // function toggleModalOne() {
  //   setIsOpen(!isOpen);
  // }
  function toggleModalTwo() {
    return;
  }
  // function toggleModalTwo() {
  //   setIsOpen2(!isOpen2);
  // }
  function toggleModalThree() {
    return;
  }
  // function toggleModalThree() {
  //   setIsOpen3(!isOpen3);
  // }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              {/* <span>News</span> */}
              <h3>Projects</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <a
                href="https://pixsy-fullstack.herokuapp.com/#/"
                target="_blank"
              >
                <div className="image">
                  {/* <div className="image" onClick={toggleModalOne}> */}
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage:
                        "url(https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portpixsy.png)",
                    }}
                  ></div>
                </div>
              </a>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    React, Redux, Ruby on Rails, PostgreSQL, AWS S3
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  <a
                    href="https://pixsy-fullstack.herokuapp.com/#/"
                    className="news-project-links"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    Pixsy is an online photography marketplace inspired by Etsy.
                  </a>
                </h3>
                <div className="tokyo_tm_read_more">
                  <a
                    href="https://pixsy-fullstack.herokuapp.com/#/"
                    target="_blank"
                  >
                    {/* <a onClick={toggleModalOne}> */}
                    <span>Live Demo</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Alex Watson</a>
                            <span>05 April 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Format releases a new tool that enables direct video
                          hosting
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="tumb"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <a href="https://home-court.herokuapp.com/" target="_blank">
                <div className="image">
                  {/* <div className="image" onClick={toggleModalTwo}> */}
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage:
                        "url(https://pixsy-dev.s3.us-east-2.amazonaws.com/port/porthomecourt.png)",
                    }}
                  ></div>
                </div>
              </a>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    MongoDB, Express, React, Node, Google Maps API
                  </p>
                </div>
                {/* END EXTRA */}
                {/* MUST FIX THIS SO THAT I LINK TO PROJECT */}
                <h3 className="title">
                  {/* <h3 className="title" onClick={toggleModalTwo}> */}
                  <a
                    href="https://home-court.herokuapp.com/"
                    className="news-project-links"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    Home Court is a social app that simplifies pickup sports
                    logistics.
                  </a>
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://home-court.herokuapp.com/">
                    {/* <a onClick={toggleModalTwo}> */}
                    <span>Live Demo</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/2.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Brook Kennedy</a>
                            <span>22 March 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Sony announced two new full frame cameras with zero
                          fanfare
                        </h3>
                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quote"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <a href="https://will-ku.github.io/nyc-viz/" target="_blank">
                <div className="image">
                  {/* <div className="image" onClick={toggleModalThree}> */}
                  <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage:
                        "url(https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portnycviz.png)",
                    }}
                  ></div>
                </div>
              </a>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">HTML/CSS, Javascript, D3.js</p>
                </div>
                <h3 className="title" onClick={toggleModalThree}>
                  <a
                    href="https://home-court.herokuapp.com/"
                    className="news-project-links"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    NYC Viz is a data visualization app for New York City real
                    estate.
                  </a>
                </h3>
                <div className="tokyo_tm_read_more">
                  <a href="https://will-ku.github.io/nyc-viz/" target="_blank">
                    {/* <a onClick={toggleModalThree}> */}
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#">Paola Atkins</a>
                            <span>15 Feb 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          Why every photographer should shoot film, even in 2021
                        </h3>
                      </div>
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Just because we can't get out and about like we
                            normally would, doesn’t mean we have to stop taking
                            pictures. There’s still plenty you can do, provided
                            you're prepared to use some imagination. Here are a
                            few ideas to keep you shooting until normal life
                            resumes.
                          </p>
                          <p>
                            Most photographers love to shoot the unusual, and
                            you don’t get much more unusual than These
                            Unprecedented Times. Right now everything counts as
                            out of the ordinary. There are a number of
                            remarkable things about these lockdown days that are
                            worth photographing now so we can remember them when
                            it is all over.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <div className="icon">
                              <img
                                className="svg"
                                src="assets/img/svg/quote.svg"
                                alt="quore"
                              />
                            </div>
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          {/* END QUOTEBOX */}
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  );
};

export default News;
