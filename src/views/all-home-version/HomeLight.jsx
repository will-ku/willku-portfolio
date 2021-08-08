import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/About";
// import Portfolio from "../../components/Portfolio";
import News from "../../components/News";
import Contact from "../../components/Contact";
import homerun from "../../assets/svg/home-run.svg";
import briefcase from "../../assets/svg/briefcase.svg";
import avatar from "../../assets/svg/avatar.svg";
import mail from "../../assets/svg/mail.svg";
import wklogo from "../../assets/svg/wklogo.svg";

const HomeLight = () => {
  return (
    <>
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Link className="navbar-brand" to="/willku-portfolio">
                  {/* this is where the logo would*/}
                  <img src={wklogo} alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img className="svg" src={homerun} alt="homerun" />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={avatar} alt="avatar" />
                    <span className="menu_content">About</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab> */}
                  <Tab>
                    <img className="svg" src={briefcase} alt="Projects" />
                    <span className="menu_content">Projects</span>
                  </Tab>
                  <Tab>
                    <img className="svg" src={mail} alt="mail" />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              {/* <div className="copyright">
                <p>
                  &copy; {new Date().getFullYear()} Tokyo <br /> Created by
                  <a
                    href="https://themeforest.net/user/ib-themes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ib-Themes
                  </a>
                </p>
              </div> */}
              {/* END COPYRIGHT */}
            </div>
            <div></div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel>
                  <Home />
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <About />
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                {/* <TabPanel>
                  <Portfolio />
                </TabPanel> */}
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                  <News />
                </TabPanel>
                {/* END NEWS MENU TAB CONTENT */}

                <TabPanel>
                  <Contact />
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
