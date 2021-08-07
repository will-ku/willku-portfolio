import React from "react";
import linkedin from "../assets/svg/social/LinkedIn.svg";
import github from "../assets/svg/social/Github.svg";
import angellist from "../assets/svg/social/AngelList.svg";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/willku/",
  },
  {
    iconName: "github",
    link: "http://github.com/will-ku/",
  },
  { iconName: "angellist", link: "https://angel.co/u/will-ku" },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/willku/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="svg" src={linkedin} alt="social" title="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="http://github.com/will-ku/" target="_blank" rel="noreferrer">
            <img className="svg" src={github} alt="social" title="Github" />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/will-ku" target="_blank" rel="noreferrer">
            <img
              className="svg"
              src={angellist}
              alt="social"
              title="AngelList"
            />
          </a>
        </li>
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;

/*
{SocialShare.map((val, i) => (
  <li key={i}>
    <a href={`${val.link}`} target="_blank" rel="noreferrer">
      <img
        className="svg"
        src={val.iconName}
        // src={`assets/img/svg/social/${val.iconName}.svg`}
        alt="social"
        title={`${val.iconName}`}
      ></img>
    </a>
  </li>
))}
*/
