import React from "react";

const SocialShare = [
  {
    iconName: "LinkedIn",
    link: "https://www.linkedin.com/in/willku/",
  },
  {
    iconName: "Github",
    link: "http://github.com/will-ku/",
  },
  { iconName: "AngelList", link: "https://angel.co/u/will-ku" },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
                title={`${val.iconName}`}
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
