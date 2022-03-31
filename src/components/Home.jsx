import React from "react";
import Social from "./Social";

const Home = () => {
  const aboutHeadshot = new Image();
  aboutHeadshot.src =
    "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/aboutmedarkshorter.jpg";

  const pixsyThumbnail = new Image();
  pixsyThumbnail.src =
    "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portpixsy.png";

  const homeCourtThumbnail = new Image();
  homeCourtThumbnail.src =
    "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/porthomecourt.png";

  const nycVizThumbnail = new Image();
  nycVizThumbnail.src =
    "https://pixsy-dev.s3.us-east-2.amazonaws.com/port/portnycviz.png";

  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage:
                  "url(https://pixsy-dev.s3.us-east-2.amazonaws.com/port/mainphotopdark.png)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">William Ku</h3>
            <p className="job" style={{ lineHeight: "1.7" }}>
              Software Engineer. New Yorker. <br /> Photographer. Creative
              Thinker.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
